import React from "react";
import "./MainContent.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function MainContent({ videoData, videoSearchClick }) {
  return (
    <div className="main-content">
      {videoData.map((video) => (
        <Link
          to="/video"
          className="link"
          onClick={() => videoSearchClick(video.id.videoId)}
        >
          <VideoCard
            title={video.snippet.title}
            image={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
            key={video.id.videoId}
          />
        </Link>
      ))}
    </div>
  );
}

export default MainContent;
