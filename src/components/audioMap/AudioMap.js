/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import { NightRegion } from "react-leaflet-night-region";

import "leaflet/dist/leaflet.css";

const AudioMap = ({ cityHandler, countryHandler, children }) => {
  const mapRef = useRef();
  const [iscoords, setiscoords] = useState([0, 0]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let response = await fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((location) => {
        cityHandler(location.city);
        countryHandler(location.country_name);
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        map.flyTo([location.latitude, location.longitude], 4, {
          duration: 1,
        });
      });

    if (response === undefined) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { current = {} } = mapRef;
          const { leafletElement: map } = current;
          map.flyTo([position.coords.latitude, position.coords.longitude], 8, {
            duration: 4,
          });
        },
        () => {
          alert("ACTIVE GPS AND ALLOW TRACKING FOR MAP COORDS");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  };

  return (
    <Map
      ref={mapRef}
      center={iscoords}
      zoom={2}
      maxZoom={19}
      minZoom={2}
      bounceAtZoomLimits={true}
      maxBoundsViscosity={0.95}
      zoomControl={false}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <ZoomControl position="topright" />
      <TileLayer
        noWrap={true}
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <NightRegion fillColor="#00345c" color="#495fef" />
      {children}
    </Map>
  );
};

export default AudioMap;
