import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "10px",
};

// Static locations (you can replace with real API later)
const userLocation = { lat: 13.0827, lng: 80.2707 }; // Chennai
const destination = { lat: 13.0674, lng: 80.2376 };

const LiveMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDG2lHvQuEIa3ORawdvCtG-4A8pM5Viioc",
  });

  const [driverLocation, setDriverLocation] = useState({
    lat: 13.0800,
    lng: 80.2600,
  });

  // 🔥 Simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDriverLocation((prev) => ({
        lat: prev.lat - 0.0005,
        lng: prev.lng - 0.0005,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={driverLocation}
      zoom={13}
    >
      {/* 📍 User */}
      <Marker position={userLocation} label="U" />

      {/* 🎯 Destination */}
      <Marker position={destination} label="D" />

      {/* 🛵 Driver */}
      <Marker
        position={driverLocation}
        icon={{
          url: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />

      {/* 🛣️ Route Line */}
      <Polyline
        path={[userLocation, driverLocation, destination]}
        options={{
          strokeColor: "#ff6a00",
          strokeWeight: 4,
        }}
      />
    </GoogleMap>
  );
};

export default LiveMap;