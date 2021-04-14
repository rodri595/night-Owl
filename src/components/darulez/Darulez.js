import React, { useState } from "react";

const Darulez = ({ openrulez, setopenrulez }) => {
  return (
    <div className="darulez-rod-container">
      <div
        onClick={() => setopenrulez((prev) => !prev)}
        className={`media-icon ${
          openrulez ? "darulez-open-icon" : "darulez-close-icon"
        } media-icon"`}
      >
        <span>👆</span>
      </div>
    </div>
  );
};

export default Darulez;
