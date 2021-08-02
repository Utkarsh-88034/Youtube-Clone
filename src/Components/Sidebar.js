import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExploreIcon from "@material-ui/icons/Explore";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} selected />
      <SidebarRow title="Explore" Icon={ExploreIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr></hr>

      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your Videos" Icon={PlayArrowIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
