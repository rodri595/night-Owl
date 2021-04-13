import React, { useState, useEffect } from "react";

import Page from "../../components/Page/Page";
// import Header from "../../components/Header/Header";
import Player from "../../components/player/Player";
import AudioImport from "../../components/audioimport/AudioImport";
import AudioMap from "../../components/audioMap/AudioMap";
import quo from "../../assets/audio/quo.mp3";
import boop from "../../assets/audio/boop.mp3";
import open from "../../assets/audio/open.mp3";
import pops from "../../assets/audio/pops.mp3";
import Footer from "../../components/Footer/Footer";

const LiveMap = () => {
  const [isDarkMode, setisDarkMode] = useState(true);
  const [isaudioImportOpen, setisaudioImportOpen] = useState(false);
  //
  const [iscity, setiscity] = useState("Planet");
  const [iscountry, setiscountry] = useState("Earth");
  const [isaudioFile, setisaudioFile] = useState(pops);
  const [issomething, setissomething] = useState("");
  const [isTitle, setisTitle] = useState("");

  useEffect(() => {
    if (issomething === "HONDURAS") {
      setisaudioFile(quo);
      setisTitle(
        "Veridis Quo - Daft Punk 202101201328674327856 34hj43k543j kh435jh kg435 hjk45hj"
      );
      setiscity("Tegucigalpa");
      setiscountry("Honduras");
    }
    if (issomething === "FRANCE") {
      setisaudioFile(boop);
      setisTitle("Boop Sound From Bob");
      setiscity("Limoges");
      setiscountry("France");
    }
    if (issomething === "KYIV") {
      setisaudioFile(open);
      setisTitle("Open Ding From Kyiv");
      setiscity("Kyiv");
      setiscountry("Ukraine");
    }
    if (issomething === "USA") {
      setisaudioFile(pops);
      setisTitle("Popping Bottle From Florida");
      setiscity("Lake Wales");
      setiscountry("USA");
    }
  }, [issomething]);

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
        setsomething={setissomething}
      />
      <AudioImport audioimportOpen={isaudioImportOpen} />
      <Footer />
    </Page>
  );
};

export default LiveMap;
