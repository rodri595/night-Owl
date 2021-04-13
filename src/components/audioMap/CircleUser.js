import React from "react";
import { Circle, Tooltip } from "react-leaflet";

const CircleUser = ({ data, audioClick }) => {
  if (data.lenght === 0) {
    return false;
  } else {
    return data.map((o) => {
      return (
        <Circle
          onclick={() => audioClick(o)}
          center={o.coords}
          radius={5}
          fillColor={o.new ? "rgb(0,200,100)" : "#495fef"}
          color={o.new ? "rgb(0,200,100)" : "#495fef"}
        >
          <Tooltip>{o.city}</Tooltip>
        </Circle>
      );
    });
  }
};

export default CircleUser;
