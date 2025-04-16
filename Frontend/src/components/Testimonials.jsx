import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Testimonials = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [mode, setMode] = useState(""); // source or destination
  const [mapType, setMapType] = useState("roadmap"); // roadmap or satellite

  const center = { lat: 25.447, lng: 81.846 };

  const handleMapClick = (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    if (mode === "source") {
      setSource(position);
      setDirections(null);
      setMode("");
    } else if (mode === "destination") {
      setDestination(position);
      setDirections(null);
      setMode("");
    }
  };

  const calculateRoute = () => {
    if (!source || !destination || !window.google) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: source,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions request failed:", status, result);
        }
      }
    );
  };

  const reset = () => {
    setSource(null);
    setDestination(null);
    setDirections(null);
    setMode("");
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-600">
        Crowd Navigation
      </h1>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "450px" }}
          center={center}
          zoom={14}
          onClick={handleMapClick}
          mapTypeId={mapType}
        >
          {source && <Marker position={source} label="S" />}
          {destination && <Marker position={destination} label="D" />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>

      <div className="text-center mt-6 space-x-3 flex flex-wrap justify-center gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setMode("source")}
        >
          Select Source
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded"
          onClick={() => setMode("destination")}
        >
          Select Destination
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={calculateRoute}
        >
          Show Route
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() =>
            setMapType((prev) =>
              prev === "roadmap" ? "satellite" : "roadmap"
            )
          }
        >
          Toggle Map Type ({mapType})
        </button>
      </div>

      {mode && (
        <p className="text-center text-orange-600 mt-4">
          Click on the map to select {mode}.
        </p>
      )}

      {(source || destination) && (
        <div className="text-center mt-4 text-gray-700">
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
  );
};

export default Testimonials;






