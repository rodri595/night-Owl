/* eslint-disable */
import React, { useEffect, useState } from "react";
import { CircleMarker, Tooltip } from "react-leaflet";
import Swal from "sweetalert2/src/sweetalert2.js";
import useSound from "use-sound";
import audio from "../../assets/audio/switchon.mp3";

const CircleUser = ({ data, audioClick }) => {
  const [isfirst, setisfirst] = useState(false);
  const [play] = useSound(audio, {
    volume: 0.5,
  });
  useEffect(() => {
    if (isfirst) {
      play();
      Swal.fire({
        icon: "success",
        html: `<div class="voicenote-save">New Audio</div>`,
        toast: true,
        position: "top-end",
        timer: 1000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    } else {
      setisfirst(true);
    }
  }, [data]);
  if (data.lenght === 0) {
    return false;
  } else {
    return data.map((o) => {
      if (o.new) {
        return (
          <CircleMarker
            className="new-user-onmap"
            onclick={() => audioClick(o)}
            center={o.coords}
            radius={2}
          >
            <Tooltip>{o.city}</Tooltip>
          </CircleMarker>
        );
      } else {
        return (
          <CircleMarker
            onclick={() => audioClick(o)}
            center={o.coords}
            radius={2}
            fillColor="#495fef"
            color="#495fef"
          >
            <Tooltip>{o.city}</Tooltip>
          </CircleMarker>
        );
      }
    });
  }
};

export default CircleUser;
