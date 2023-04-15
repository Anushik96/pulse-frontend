import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function ContactMap () {
  const mapStyles = {
    height: "300px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.177200,
    lng: 44.503490,
  };

  return (
    <LoadScript googleMapsApiKey={'AIzaSyADPTGLae2uz444OYjgxz5Xa9LTTWawTDY'}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

