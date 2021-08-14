import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbar-left">
        <span className="logo">ANTI-SOCIAL</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for firends , post or videos"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timelines</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./Assets/1.jpg" alt=" " className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
