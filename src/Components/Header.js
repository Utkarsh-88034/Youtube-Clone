import React from "react";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { useHistory } from "react-router-dom";

function Header({ searchSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  function updateSearch(e) {
    setSearchTerm(e.target.value);
  }
  function searchHandler(e) {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");

    searchSubmit(searchTerm);
    history.push("/search");
  }

  return (
    <div className="header">
      <div className="header_top_left">
        <MenuIcon className="hamburger" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
          onClick={() => history.push("/")}
        />
      </div>
      <div className="header_top_middle">
        <form className="search-container" onSubmit={searchHandler}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={updateSearch}
            />
          </div>

          <button type="submit" className="search-icon">
            <SearchIcon fontSize="small" />
          </button>
        </form>
        <div className="mic-icon icon">
          <MicIcon />
        </div>
      </div>
      <div className="header_top_right">
        <div className="icon">
          <VideoCallIcon />
        </div>
        <div className="icon">
          <AppsIcon />
        </div>
        <div className="icon">
          <NotificationsIcon />
        </div>
        <div className="icon avatar-icon">
          <Avatar alt="" src="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
