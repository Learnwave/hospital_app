import React, { useState } from "react";

const GetUserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(""); // Clear any previous errors
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Get User Location</h1>
      <button onClick={getLocation} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Get Location
      </button>
      {location.latitude && location.longitude ? (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Latitude:</strong> {location.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {location.longitude}
          </p>
        </div>
      ) : error ? (
        <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
      ) : null}
    </div>
  );
};

export default GetUserLocation;
