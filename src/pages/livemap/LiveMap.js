/* eslint-disable */
import React, { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import Player from "../../components/player/Player";
import AudioImport from "../../components/audioimport/AudioImport";
import AudioMap from "../../components/audioMap/AudioMap";

import Footer from "../../components/Footer/Footer";
import Data from "./data.json";
import Data2 from "./data2.json";
import CircleUser from "../../components/audioMap/CircleUser";
import Darulez from "../../components/darulez/Darulez";
import Rules from "../../components/rules/Rules";

//
import giorgio from "../../assets/audio/giorgio.mp3";
import baby from "../../assets/audio/baby.mp3";
import bah from "../../assets/audio/bah.mp3";
import child from "../../assets/audio/child.wav";
import mario from "../../assets/audio/mario.mp3";
import sonar from "../../assets/audio/sonar.mp3";
import zombie from "../../assets/audio/zombie.mp3";
import donald from "../../assets/audio/donald.ogg";
//

const LiveMap = () => {
  const [isDarkMode, setisDarkMode] = useState(true);
  const [isaudioImportOpen, setisaudioImportOpen] = useState(false);
  const [isopenrulez, setisopenrulez] = useState(true);

  //
  const [isapidata, setisapidata] = useState([]);
  const [isaudioClick, setisaudioClick] = useState([]);

  //
  const [iscity, setiscity] = useState("Planet");
  const [iscountry, setiscountry] = useState("Earth");
  const [isaudioFile, setisaudioFile] = useState();
  const [isTitle, setisTitle] = useState("");

  useEffect(() => {
    let intervalID;

    intervalID = setInterval(() => {
      handler();
    }, 5000);
    return () => clearInterval(intervalID);
  }, [isapidata]);

  const playerHnadler = (side) => {
    if (side === "->") {
      isapidata.map((o, i) => {
        if (isaudioClick._id === o._id) {
          if (isapidata.length - 1 === i) {
            setisaudioClick(isapidata[0]);
          } else {
            setisaudioClick(isapidata[i + 1]);
          }
        }
      });
    } else {
      isapidata.map((o, i) => {
        if (isaudioClick._id === o._id) {
          if (i === 0) {
            setisaudioClick(isapidata[isapidata.length - 1]);
          } else {
            setisaudioClick(isapidata[i - 1]);
          }
        }
      });
    }
  };

  useEffect(() => {
    dataHandlerMusic();
  }, [isaudioClick]);

  const dataHandlerMusic = () => {
    if (isaudioClick.trackFile === "giorgio") {
      setisaudioFile(giorgio);
    }
    if (isaudioClick.trackFile === "baby") {
      setisaudioFile(baby);
    }
    if (isaudioClick.trackFile === "bah") {
      setisaudioFile(bah);
    }
    if (isaudioClick.trackFile === "child") {
      setisaudioFile(child);
    }
    if (isaudioClick.trackFile === "mario") {
      setisaudioFile(mario);
    }
    if (isaudioClick.trackFile === "sonar") {
      setisaudioFile(sonar);
    }
    if (isaudioClick.trackFile === "zombie") {
      setisaudioFile(zombie);
    }
    if (isaudioClick.trackFile === "donald") {
      setisaudioFile(donald);
    }

    setisTitle(isaudioClick.audioTitle);
    setiscity(isaudioClick.city);
    setiscountry(isaudioClick.country);
  };

  const handler = () => {
    if (isapidata.length === 0) {
      setisapidata(Data);
    } else {
      if (!(isapidata.length === Data2.length)) {
        Data2.filter((o, i) => {
          if (isapidata[i] === undefined) {
            o.new = true;
          }
        });
        setisapidata(Data2);
      }
    }
  };

  return (
    <Page isDarkMode={isDarkMode}>
      <Player
        audioTitle={isTitle}
        cityName={iscity}
        countryName={iscountry}
        audioimportOpen={isaudioImportOpen}
        audioimportOpenHandler={setisaudioImportOpen}
        voicenoteFile={isaudioFile}
        openrulez={isopenrulez}
        setopenrulez={setisopenrulez}
        //
        isplayerHnadler={playerHnadler}
      />
      <AudioMap
        cityHandler={setiscity}
        countryHandler={setiscountry}
        userAudios={isapidata}
      >
        <CircleUser data={isapidata} audioClick={setisaudioClick} />
      </AudioMap>
      <AudioImport audioimportOpen={isaudioImportOpen} />
      <Footer />
      <Darulez openrulez={isopenrulez} setopenrulez={setisopenrulez} />
      <Rules setopenrulez={setisopenrulez} openrulez={isopenrulez} />
    </Page>
  );
};

export default LiveMap;
