import React, { useState } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

const AudioImport = ({ audioimportOpen }) => {
  const handleAudioStop = (data) => {
    console.log("handleAudioStop", data);
  };
  const handleAudioUpload = (file) => {
    console.log("handleAudioUpload", file);
  };
  const handleOnChange = (i, o) => {
    console.log("handleOnChange", i);
    console.log("handleOnChange", o);
  };
  const handleRest = () => {};
  return (
    <div className={audioimportOpen ? "audioimportOpen" : "audioimportClose"}>
      {/* <Recorder
            audioURL={null}
            handleAudioStop={(data) => handleAudioStop(data)}
            handleOnChange={(value) => handleOnChange(value, "firstname")}
            handleAudioUpload={(data) => handleAudioUpload(data)}
            handleRest={() => handleRest()}
          /> */}
      <div
        style={{
          padding: "10px",
        }}
      ></div>
    </div>
  );
};

export default AudioImport;
