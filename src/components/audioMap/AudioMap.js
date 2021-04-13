import React, { useState, useEffect, useRef } from "react";

import { Map, TileLayer, Circle, Tooltip } from "react-leaflet";
import { NightRegion } from "react-leaflet-night-region";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

const AudioMap = ({ cityHandler, countryHandler, setsomething }) => {
  const mapRef = useRef();
  const [iscoords, setiscoords] = useState([0, 0]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((location) => {
        console.log(location);
        cityHandler(location.city);
        countryHandler(location.country_name);
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        map.flyTo([location.latitude, location.longitude], 8, {
          duration: 3,
        });
      });
  };

  const audioClick = (country) => {
    setsomething(country);
  };
  return (
    <Map
      ref={mapRef}
      center={iscoords}
      zoom={3}
      maxZoom={19}
      minZoom={3}
      bounceAtZoomLimits={true}
      maxBoundsViscosity={0.95}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      worldCopyJump={true}
    >
      <TileLayer
        noWrap={true}
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <NightRegion fillColor="#00345c" color="#495fef" />

      <Circle
        onclick={() => audioClick("KYIV")}
        center={[50.5, 30.5]}
        radius={10}
        fillColor="#495fef"
        color="#495fef"
      >
        <Tooltip>KYIV</Tooltip>
      </Circle>
      <Circle
        onclick={() => audioClick("HONDURAS")}
        center={[14.099284922844143, -87.14355468750001]}
        radius={10}
        fillColor="#495fef"
        color="#495fef"
      >
        <Tooltip>HONDURAS</Tooltip>
      </Circle>
      <Circle
        onclick={() => audioClick("USA")}
        center={[27.955591004642553, -81.43066406250001]}
        radius={10}
        fillColor="#495fef"
        color="#495fef"
      >
        <Tooltip>USA</Tooltip>
      </Circle>
      <Circle
        onclick={() => audioClick("FRANCE")}
        center={[45.832626782661556, 1.2689208984375002]}
        radius={10}
        fillColor="#495fef"
        color="#495fef"
      >
        <Tooltip>FRANCE</Tooltip>
      </Circle>
    </Map>
  );
};

// AudioMap.defaultProps = {
//   coordenadas: [14.094451140902498, -87.19079102693705],
// };

export default AudioMap;
