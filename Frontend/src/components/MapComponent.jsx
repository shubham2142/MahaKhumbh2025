import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from '@react-google-maps/api';
import axios from 'axios';
import TrafficControl from './TrafficControl';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.209,
};

function MapComponent() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      });

  const [directions, setDirections] = useState(null);
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    if (!isLoaded || !window.google || !window.google.maps) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: 'Railway Station, Prayagraj',
        destination: 'sangam ghat prayagraj',
        travelMode: window.google.maps.TravelMode.DRIVING,
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
    axios.get('http://localhost:5000/api/traffic/')
      .then((res) => {
        setTrafficData(res.data);
        console.log(res.data);
        
      })
      .catch((err) => {
        console.error("Error fetching traffic data:", err);
      });
  }, []);

  const getRouteColor = (index) => {
    const routeTraffic = trafficData.find((t) => t.routeId === index.toString());
    return (routeTraffic && routeTraffic.congested )? 'red' : 'blue';
  };

  return isLoaded ? (
    <div>
      <TrafficControl routeCount={directions?.routes.length || 0} />
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={12}>
        {directions &&
          directions.routes.map((route, index) => (
            <DirectionsRenderer
              key={index}
              directions={{ ...directions, routes: [route] }}
              options={{
                polylineOptions: {
                  strokeColor: getRouteColor(index),
                  strokeWeight: 5,
                },
                suppressMarkers: false,
              }}
            />
          ))}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading map...</div>
  );
}

export default MapComponent;