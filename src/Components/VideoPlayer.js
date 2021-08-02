import React from "react";
import "./VideoPlayer.css";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { useState } from "react";

function VideoPlayer({ videos, playVidId, flag }) {
  console.log(playVidId);
  const [playingVid, setPlayingVid] = useState(
    `https://www.youtube.com/embed/${playVidId}`
  );
  function updateVid(id) {
    setPlayingVid(`https://www.youtube.com/embed/${id}`);
  }

  return (
    <div className="playvideo">
      <div className="video-player">
        <iframe
          src={playingVid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          autoPlay={true}
        ></iframe>
      </div>
      <div className="recommended-video">
        {videos.map((video) => (
          <RecommendedVideoCard click={updateVid} video={video} flag={flag} />
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
