import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const toggleRef = useRef(null);
  const fullscreenRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const updateButton = () => {
    const icon = videoRef.current.paused ? '►' : '❚ ❚';
    toggleRef.current.textContent = icon;
  };

  const skip = (e) => {
    videoRef.current.currentTime += parseFloat(e.target.dataset.skip);
  };

  const handleRangeUpdate = (e) => {
    videoRef.current[e.target.name] = e.target.value;
    if (e.target.name === 'volume') setVolume(e.target.value);
    if (e.target.name === 'playbackRate') setPlaybackRate(e.target.value);
  };

  const handleProgress = () => {
    const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressBarRef.current.style.flexBasis = `${percent}%`;
  };

  const scrub = (e) => {
    const scrubTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen();
      } else if (playerRef.current.webkitRequestFullscreen) {
        playerRef.current.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="video-player">
      <div className={`player ${isFullscreen ? 'fullscreen' : ''}`} ref={playerRef}>
        <video
          className="player__video viewer"
          src="/images/Calculus 1 - Introduction to Limits.mp4"
          ref={videoRef}
          onClick={togglePlay}
          onPlay={updateButton}
          onPause={updateButton}
          onTimeUpdate={handleProgress}
        />
        <div className="player__controls">
          <div className="progress" ref={progressRef} onClick={scrub}>
            <div className="progress__filled" ref={progressBarRef}></div>
          </div>
          <button
            className="player__button toggle"
            title="Toggle Play"
            ref={toggleRef}
            onClick={togglePlay}
          >
            ►
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleRangeUpdate}
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value={playbackRate}
            onChange={handleRangeUpdate}
          />
          <button
            data-skip="-10"
            className="player__button"
            onClick={skip}
          >
            « 10s
          </button>
          <button
            data-skip="25"
            className="player__button"
            onClick={skip}
          >
            25s »
          </button>
          <button
            className="player__button fullscreen"
            onClick={toggleFullscreen}
            ref={fullscreenRef}
          >
            {isFullscreen ? "🔳" : "🔲"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
