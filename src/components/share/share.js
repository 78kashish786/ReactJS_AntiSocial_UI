import React from "react";
import "./share.css";
import { PermMedia } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="Assets/1.jpg" className="shareProfile" alt="#" />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats in your mind"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div classNAme="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
          <div classNAme="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="Orange" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
          <div classNAme="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="Tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
