import React from "react";
import "./Video.css";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comments from "../../components/Comments/Comments";

const Video = () => {
  return (
    <div className="video">
      <div className="video-container">
        <p>
          <a href="">NHT</a>/<a href="">Saas</a>/<a href="">Day1</a>/
        </p>
        <h1>SaaS NHT Day 1</h1>
        <div className="video-player-container">
          <div className="video-player">
            <VideoPlayer />
          </div>

          <div className="video-detail">
            <h3>In this video</h3>
            <p>00:01 - introduction</p>
            <p>02:04 - Conclusion</p>
            <p>03:22 - Second Example</p>
            <p>04:25 - Factoring difference of cubes </p>
            <p>10:27 - Complex fractions with radicals</p>
          </div>
        </div>
        <div className="comments">
            <div className="comments-container">
                <Comments />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
