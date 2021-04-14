import React from "react";

const Footer = () => {
  return (
    <div className="footer-rod-container">
      <div className="footer-rod ">
        <div
          style={{
            color: "white",
            fontSize: "12px",
            padding: "5px",
            width: "100%",
          }}
        >
          Made with <span>💖</span> by{" "}
          <a href="https://erazo.netlify.app/" target="_blank">
            Rodri.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
