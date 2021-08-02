import React from "react";
import "./MainContent.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function HomeVIdeo({ videoClick, homeVid }) {
  return (
    <div className="main-content">
      {homeVid.map((vid) => (
        <Link to="/video" className="link" onClick={() => videoClick(vid.id)}>
          <VideoCard
            title={vid.snippet.title}
            image={vid.snippet.thumbnails.medium.url}
            channel={vid.snippet.channelTitle}
            key={vid.id}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomeVIdeo;
