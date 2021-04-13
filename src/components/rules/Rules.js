import React from "react";
import Darulez from "../../assets/img/rules.png";
import Cone from "../../assets/img/cone.png";
import Square2 from "../../assets/img/square2.png";

const Rules = ({ openrulez }) => {
  return (
    <div className="ruleslist-rod-container">
      <div className={openrulez ? "darulez-open" : "darulez-close"}>
        <div
          style={{
            padding: "10px",
          }}
        >
          <div className="container ">
            <div className="text-center">
              <img src={Darulez} style={{ margin: "10px 0", height: "50px" }} />
            </div>
            <text className="rule-description">
              1) A clear audio file of the voice (it can just be you or with
              other night time workers). Background noise is okay, please make
              sure to hold your phone microphone close to your mouth or on a
              nearby table.
            </text>
            <br />
            <div className="text-left ">
              <img
                src={Square2}
                style={{ margin: "10px 10px", height: "50px" }}
              />
            </div>
            <text className="rule-description">
              2) People who submit voice messages are those who work between the
              times 6pm - 6am. All time zones, any job, any hours, anywhere
              around the world. Anyone working within this time frame, please
              send me a voice message in your first language. It will be
              anonymous on my end, contributing to a worldwide archive of
              nocturnal voices.
            </text>
            <div className="text-right ">
              <img src={Cone} style={{ margin: "10px 10px", height: "50px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
