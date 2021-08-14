import React from "react";
import "./Post.css";
import { Bookmarks } from "@material-ui/icons";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div clasName="postTopLeft">
            <img src="./Assets/2.jpg" alt="#" className="postProfileImage" />
            <span className="postUsername">John Doe</span>
            <span className="postDate">4 min ao</span>
          </div>
          {/* ........................... */}
          <div clasName="postTopRight">
            {" "}
            <Bookmarks />
          </div>
        </div>
        <div className="postCenter">
          <span className ="postText">Hey its my first Post</span>
          <img src ="Assets/2.jpg" alt ="#"  className ="postImage"/>
        </div>
        <div className="postBottom">
          <div ClassName ="postBottomLeft">
            <img className ="likeIcon" src ="Assets/like.jpg"  alt ="Like"/>
            <img className ="likeIcon" src ="Assets/heart.png"alt ="heart" />
            <span className ="postLikeCounter">222 people liked it</span>
          </div>
          <div ClassName ="postBottomRight">
            <span className ="postCommentText">My Commments</span>
          </div>

        </div> 
      </div>
    </div>
  );
}
