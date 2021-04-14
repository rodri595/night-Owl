import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";

const AudioImport = ({ audioimportOpen }) => {
  return (
    <div className={audioimportOpen ? "audioimportOpen" : "audioimportClose"}>
      <div
        style={{
          padding: "10px",
        }}
      >
        <div className="container ">
          <div
            className="text-center"
            style={{ transform: "translateY(-35px)" }}
          >
            <img
              src={Logo}
              style={{
                height: "50px",
              }}
            />
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
                color: "#495fef",
              }}
            >
              Whats on your mind?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioImport;
