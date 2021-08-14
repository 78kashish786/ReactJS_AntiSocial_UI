import React from "react";
import Share from "../share/share";
import "./feed.css";
import Post from "../Post/Post";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
