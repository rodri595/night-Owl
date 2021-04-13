import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useSound from "use-sound";
import Marquee from "react-double-marquee";

const Player = ({
  voicenoteFile,
  audioTitle,
  cityName,
  countryName,
  audioimportOpen,
  audioimportOpenHandler,
}) => {
  const [volumneLevel, setvolumneLevel] = useState(0.5);
  const [ismenuOpen, setismenuOpen] = useState(false);
  const [isloadingPage, setisloadingPage] = useState(true);
  const [play, { stop, isPlaying }] = useSound(voicenoteFile, {
    volume: volumneLevel,
  });

  const volumeHandler = (e) => {
    setvolumneLevel(e.target.value);
  };
  const ismenuOpenHandler = () => {
    setismenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isloadingPage) {
      setisloadingPage(false);
      return stop();
    } else {
      setismenuOpen(true);
      return stop();
    }
  }, [voicenoteFile]);

  const playAudioHandler = () => {
    if (voicenoteFile === undefined) {
      ismenuOpenHandler();
      Swal.fire({
        icon: "error",
        html: `<div class="voicenote-save">Please Search An Audio</div>`,
        toast: true,
        position: "top",
        timer: 1000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    } else {
      play();
    }
  };

  // const uploadAudio = ({audioimportOpenHandler}) => {
  //   Swal.fire({
  //     icon: "success",
  //     html: `<div class="voicenote-save">Voice Note Shared</div>`,
  //     toast: true,
  //     position: "top",
  //     timer: 3000,
  //     timerProgressBar: false,
  //     showConfirmButton: false,
  //   });
  // };
  return (
    <div>
      {ismenuOpen ? (
        <div
          className="audio-player-close media-icon"
          onClick={() => ismenuOpenHandler()}
        >{`<-`}</div>
      ) : (
        <></>
      )}
      <div
        className={
          ismenuOpen ? "audio-player-open" : "audio-player-close media-icon"
        }
      >
        {ismenuOpen ? (
          <div>
            <div
              style={{
                display: "flex",

                padding: "5px 5px",
              }}
            >
              <div className="audio-player-top">
                <div className="marquee-audio-title">
                  <Marquee direction="left" delay="3000" scrollWhen="overflow">
                    {audioTitle}
                  </Marquee>
                </div>

                <div className="audio-subtitle">
                  {cityName}, {countryName}
                </div>
              </div>

              <div
                className="media-icon"
                style={{
                  fontSize: "25px",
                  width: "25px",
                  height: "25px",
                }}
                onClick={() => audioimportOpenHandler((prev) => !prev)}
              >
                <span
                  className={
                    audioimportOpen
                      ? "audioimportCloseIcon"
                      : "audioimportOpenIcon"
                  }
                >
                  +
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "0 5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "",
                  fill: "white",
                  width: "150px",
                }}
              >
                <div className="media-icon">
                  <svg height="100%" width="100%">
                    <path d="M23.4529819,24.1553906 L34.4647654,17.1779273 C34.9312823,16.8823254 35.5491016,17.0208793 35.8447035,17.4873962 C35.9461427,17.6474869 36,17.8331078 36,18.0226308 L36,31.9775574 C36,32.5298421 35.5522847,32.9775574 35,32.9775574 C34.810477,32.9775574 34.6248561,32.9237001 34.4647654,32.8222608 L23.4529819,25.8447975 C22.986465,25.5491956 22.8479111,24.9313763 23.143513,24.4648595 C23.2225535,24.3401182 23.3282406,24.2344311 23.4529819,24.1553906 Z M10.3329444,24.153178 L21.4605722,17.1668243 C21.9283111,16.8731598 22.5455504,17.0142749 22.8392149,17.4820138 C22.9392394,17.6413295 22.9922988,17.8256276 22.9922988,18.0137404 L22.9922988,31.9864478 C22.9922988,32.5387325 22.5445835,32.9864478 21.9922988,32.9864478 C21.8041861,32.9864478 21.6198879,32.9333884 21.4605722,32.8333639 L10.3329444,25.8470101 C9.86520561,25.5533457 9.72409045,24.9361063 10.0177549,24.4683675 C10.097766,24.3409285 10.2055055,24.2331891 10.3329444,24.153178 Z" />
                  </svg>
                </div>

                {isPlaying ? (
                  <div className="media-icon" onClick={() => stop()}>
                    <svg width="50" height="50">
                      <rect width="18" height="18" x="16" y="16" rx="1" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className="media-icon"
                    onClick={() => playAudioHandler()}
                  >
                    <svg height="100%" width="100%">
                      <path d="M35.6613092,25.8454889 L19.533993,36.0311623 C19.0670424,36.3260785 18.4494273,36.186617 18.1545111,35.7196664 C18.0535739,35.5598493 18,35.3746968 18,35.1856734 L18,14.8143266 C18,14.2620418 18.4477153,13.8143266 19,13.8143266 C19.1890234,13.8143266 19.3741758,13.8679005 19.533993,13.9688377 L35.6613092,24.1545111 C36.1282599,24.4494273 36.2677213,25.0670424 35.9728051,25.533993 C35.8934185,25.6596886 35.7870048,25.7661022 35.6613092,25.8454889 Z" />
                    </svg>
                  </div>
                )}

                <div className="media-icon">
                  <svg height="100%" width="100%">
                    <path d="M26.5470181,25.8310572 L15.5352346,32.8085205 C15.0687177,33.1041224 14.4508984,32.9655684 14.1552965,32.4990516 C14.0538573,32.3389609 14,32.15334 14,31.963817 L14,18.0088904 C14,17.4566057 14.4477153,17.0088904 15,17.0088904 C15.189523,17.0088904 15.3751439,17.0627477 15.5352346,17.1641869 L26.5470181,24.1416502 C27.013535,24.4372521 27.1520889,25.0550715 26.856487,25.5215883 C26.7774465,25.6463295 26.6717594,25.7520166 26.5470181,25.8310572 Z M39.6670556,25.8332698 L28.5394278,32.8196235 C28.0716889,33.113288 27.4544496,32.9721728 27.1607851,32.504434 C27.0607606,32.3451183 27.0077012,32.1608201 27.0077012,31.9727074 L27.0077012,18 C27.0077012,17.4477153 27.4554165,17 28.0077012,17 C28.1958139,17 28.3801121,17.0530594 28.5394278,17.1530839 L39.6670556,24.1394376 C40.1347944,24.4331021 40.2759095,25.0503414 39.9822451,25.5180803 C39.902234,25.6455193 39.7944945,25.7532587 39.6670556,25.8332698 Z" />
                  </svg>
                </div>
              </div>
              <div style={{ backgroundColor: "", width: "150px" }}>
                <input
                  className="volumeSlider"
                  style={{
                    width: "125px",
                    paddingTop: "20px",
                    paddingLeft: "10px",
                  }}
                  type="range"
                  max="1.0"
                  min="0.0"
                  step="0.1"
                  name="volumneLevel"
                  value={volumneLevel}
                  onChange={(e) => volumeHandler(e)}
                />
              </div>
              <div
                className="media-icon"
                style={{
                  backgroundColor: "",
                  fontSize: "25px",
                  width: "25px",
                  transform: "translateX(-3px)",
                }}
              >
                ...
              </div>{" "}
            </div>
          </div>
        ) : (
          <div onClick={() => ismenuOpenHandler()}>{`->`}</div>
        )}
      </div>
    </div>
  );
};
Player.defaultProps = {
  audioTitle: "",
};

export default Player;
