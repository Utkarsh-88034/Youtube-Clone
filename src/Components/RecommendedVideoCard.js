import React from "react";
import "./RecommendedVideoCard.css";

function RecommendedVideoCard({ video, flag, click }) {
  let id = "";
  if (flag === true) {
    id = video.id;
  } else {
    id = video.id.videoId;
  }
  return (
    <div className="recommended-video-card-container" onClick={() => click(id)}>
      <div className="recommended-thumb">
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="recommended-video-details">
        <div className="vid-title">{video.snippet.title}</div>
        <p>{video.snippet.channelTitle}</p>
        <p></p>
      </div>
    </div>
  );
}

export default RecommendedVideoCard;
