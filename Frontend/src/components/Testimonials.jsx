import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Testimonials = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectMode, setSelectMode] = useState(""); // "source" or "destination"

  const center = { lat: 25.447, lng: 81.846 };

  const handleMapClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    if (selectMode === "source") {
      setSource(clickedLocation);
      setSelectMode(""); // Disable selection after picking
      setDirectionsResponse(null);
    } else if (selectMode === "destination") {
      setDestination(clickedLocation);
      setSelectMode("");
      setDirectionsResponse(null);
    }
  };

  const calculateRoute = () => {
    if (!source || !destination) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: source,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error("Directions error:", result);
        }
      }
    );
  };

  const resetAll = () => {
    setSource(null);
    setDestination(null);
    setDirectionsResponse(null);
    setSelectMode("");
  };

  return (
    <div className="mt-10 px-4">
      <h2 className="text-4xl sm:text-5xl text-center text-orange-600 mb-10">
        Crowd Navigation
      </h2>

      <LoadScript googleMapsApiKey="process.env.google_api">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={center}
          zoom={15}
          onClick={handleMapClick}
        >
          {/* Source Marker */}
          {source && <Marker position={source} label="S" />}
          {/* Destination Marker */}
          {destination && <Marker position={destination} label="D" />}
          {/* Route */}
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </LoadScript>

      {/* Controls */}
      <div className="mt-6 text-center space-y-4">
        <div className="space-x-4">
          <button
            onClick={() => setSelectMode("source")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Select Source
          </button>
          <button
            onClick={() => setSelectMode("destination")}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Select Destination
          </button>
          <button
            onClick={calculateRoute}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Show Route
          </button>
          <button
            onClick={resetAll}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>

        {/* Status */}
        {selectMode && (
          <p className="text-lg mt-4 text-orange-500 font-medium">
            Click on the map to select {selectMode}.
          </p>
        )}
        {(source || destination) && (
          <div className="mt-4 text-gray-700">
            {source && (
              <p>
                <strong>Source:</strong> {source.lat.toFixed(5)}, {source.lng.toFixed(5)}
              </p>
            )}
            {destination && (
              <p>
                <strong>Destination:</strong> {destination.lat.toFixed(5)},{" "}
                {destination.lng.toFixed(5)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
