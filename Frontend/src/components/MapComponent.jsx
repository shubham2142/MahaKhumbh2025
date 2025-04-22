import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
  Polyline,
  Marker,
  Autocomplete,
  LoadScript,
} from '@react-google-maps/api';
import axios from 'axios';
import TrafficControl from './TrafficControl';

const containerStyle = {
  width: '100%',
  height: '100vh', // Full screen height
};

const defaultCenter = {
  lat: 25.4358,
  lng: 81.8463,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [directions, setDirections] = useState(null);
  const [trafficData, setTrafficData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(14);

  // Animate arrows moving along path
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.google || !window.google.maps) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'Railway Station, Prayagraj',
        destination: 'Sangam Ghat, Prayagraj',
        travelMode: window.google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`, result);
        }
      }
    );
  }, [isLoaded]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/traffic/')
      .then((res) => setTrafficData(res.data))
      .catch((err) => console.error('Error fetching traffic data:', err));
  }, []);

  const getRouteColor = (index) => {
    const routeTraffic = trafficData.find((t) => t.routeId === index.toString());
    return routeTraffic && routeTraffic.congested ? 'red' : '#00bfff'; // blue by default
  };

  const handlePlaceSelect = (place) => {
    const location = place.geometry.location;
    setCenter({
      lat: location.lat(),
      lng: location.lng(),
    });
    setZoom(15); // Zoom into the selected place
  };

  return isLoaded ? (
    <div>
      <TrafficControl routeCount={directions?.routes.length || 0} />
      <div className="search-box">
        <Autocomplete onPlaceChanged={handlePlaceSelect}>
          <input
            type="text"
            className="w-full p-2 mb-4 rounded-md"
            placeholder="Search for a place"
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: true,
          fullscreenControl: true,
          draggable: true,  // Enable dragging the map
          scrollwheel: true,  // Enable zooming with scroll
          disableDoubleClickZoom: false,  // Allow zooming with double-click
          gestureHandling: 'greedy', // Allow gestures for zooming and dragging
        }}
      >
        {directions &&
          directions.routes.map((route, routeIndex) => (
            <React.Fragment key={routeIndex}>
              <DirectionsRenderer
                directions={{ ...directions, routes: [route] }}
                options={{
                  polylineOptions: {
                    strokeColor: getRouteColor(routeIndex),
                    strokeWeight: 4,
                  },
                  suppressMarkers: false,
                }}
              />
              {/* Walking steps with animated arrows */}
              {route.legs.map((leg, legIndex) =>
                leg.steps.map((step, stepIndex) => (
                  <Polyline
                    key={`${routeIndex}-${legIndex}-${stepIndex}`}
                    path={step.path}
                    options={{
                      strokeColor: getRouteColor(routeIndex),
                      strokeOpacity: 0.5,
                      strokeWeight: 3,
                      icons: [
                        {
                          icon: {
                            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                            scale: 2.5,
                            strokeColor: 'black',
                          },
                          offset: `${offset}%`,
                          repeat: '25px',
                        },
                      ],
                    }}
                  />
                ))
              )}

              {/* Animated marker for each route start */}
              <Marker
                position={route.legs[0].start_location}
                animation={window.google.maps.Animation.BOUNCE}
                label={{
                  text: `Start ${routeIndex + 1}`,
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              />
            </React.Fragment>
          ))}
      </GoogleMap>
    </div>
  ) : (
    <div className="text-center text-lg text-white mt-10">Loading map...</div>
  );
}

export default MapComponent;
