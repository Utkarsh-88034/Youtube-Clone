import React from "react";
import { Avatar } from "@material-ui/core";
import "./MainContent.css";
function VideoCard({ image, title, channel, views, time, avatar }) {
  return (
    <div className="videocard-container">
      <img className="vid-thumbnail" src={image} alt="" />
      <div className="vid-info-box">
        <Avatar className="vid-avatar" src={avatar} />
        <div className="vid-info">
          <h4 className="vid-title">{title}</h4>
          <p>{channel}</p>
          <p>
            {views}∙{time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
