import React from "react";
import Darulez from "../../assets/img/rules.png";
import Cone from "../../assets/img/connect.png";
import Square2 from "../../assets/img/square2.png";

const Rules = ({ openrulez, setopenrulez }) => {
  return (
    <div className={openrulez ? "darulez-open " : " darulez-close"}>
      <div
        style={{
          padding: "10px",
        }}
      >
        <div className="container ">
          <div
            onClick={() => setopenrulez(false)}
            className="media-icon"
            style={{
              position: "absolute",
              fontSize: "35px",
              fontWeight: "bolder",
              color: "#495fef",
              top: "-10px",
              right: "10px",
              zIndex: "1000",
            }}
          >
            <span style={{ transform: "rotate(45deg)" }}>+</span>
          </div>
          <div
            className="text-center"
            style={{ transform: "translateY(-35px)" }}
          >
            <img
              alt="rules"
              src={Darulez}
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
              Rules For Sharing Audio
            </div>
          </div>

          <text className="rule-description">
            A clear audio file of the voice (it can just be you or with other
            night time workers). Background noise is okay, please make sure to
            hold your phone microphone close to your mouth or on a nearby table.
          </text>

          <div className="text-left ">
            <img
              alt="rules"
              src={Square2}
              style={{
                margin: "10px 0px",
                height: "50px",
                transform: "translateX(-50px)",
              }}
            />
          </div>
          <text className="rule-description">
            People who submit voice messages are those who work between the
            times 6pm - 6am. All time zones, any job, any hours, anywhere around
            the world. Anyone working within this time frame, please send me a
            voice message in your first language. It will be anonymous on my
            end, contributing to a worldwide archive of nocturnal voices.
          </text>

          <div
            style={{
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "bolder",
              color: "#495fef",
            }}
            className="text-right"
          >
            - Nocturnal Voices Team
          </div>
          <div style={{ height: "50px", width: "280px" }}>
            <img
              alt="rules"
              src={Cone}
              style={{
                position: "absolute",
                bottom: "-100px",
                right: "-20px",
                height: "200px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
