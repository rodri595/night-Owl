import React, { useState, useEffect } from "react";

import Page from "../../components/Page/Page";
import Player from "../../components/player/Player";
import AudioImport from "../../components/audioimport/AudioImport";
import AudioMap from "../../components/audioMap/AudioMap";
import quo from "../../assets/audio/quo.mp3";
import boop from "../../assets/audio/boop.mp3";
import open from "../../assets/audio/open.mp3";
import pops from "../../assets/audio/pops.mp3";
import Footer from "../../components/Footer/Footer";
import Data from "./data.json";
import Data2 from "./data2.json";
import CircleUser from "../../components/audioMap/CircleUser";
import Darulez from "../../components/darulez/Darulez";
import Rules from "../../components/rules/Rules";

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

  useEffect(() => {
    if (isaudioClick.trackFile === "quo") {
      setisaudioFile(quo);
    }
    if (isaudioClick.trackFile === "boop") {
      setisaudioFile(boop);
    }
    if (isaudioClick.trackFile === "open") {
      setisaudioFile(open);
    }
    if (isaudioClick.trackFile === "pops") {
      setisaudioFile(pops);
    }

    setisTitle(isaudioClick.audioTitle);
    setiscity(isaudioClick.city);
    setiscountry(isaudioClick.country);
  }, [isaudioClick]);

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
      <Rules openrulez={isopenrulez} />
    </Page>
  );
};

export default LiveMap;
