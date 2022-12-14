import "./App.css";
import { useRef } from "react";
import useVideoPlayer from "./hooks/useVideoPlayer";
import video from "./assets/video.mp4";

function App() {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />

        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
         <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">&nbsp;&nbsp;0.50x&nbsp;&nbsp;</option>
            <option value="1">&nbsp;&nbsp;1x&nbsp;&nbsp;</option>
            <option value="1.25">&nbsp;&nbsp;1.25x&nbsp;&nbsp;</option>
            <option value="2">&nbsp;&nbsp;2x&nbsp;&nbsp;</option>
          </select>

          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
