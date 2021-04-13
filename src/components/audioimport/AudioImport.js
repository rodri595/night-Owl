import React, { useState } from "react";

const AudioImport = ({ audioimportOpen }) => {
  return (
    <div className={audioimportOpen ? "audioimportOpen" : "audioimportClose"}>
      <div
        style={{
          padding: "10px",
        }}
      >
        <div className="container text-center">
          <div className="text-center" style={{}}>
            <h4>Whats On your Mind?</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioImport;
