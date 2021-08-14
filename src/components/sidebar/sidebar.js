import React from "react";
import "./sidebar.css";
import { RssFeed } from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          {/* <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li> */}
        </ul>
        <button className ="sidebarButton">Show More</button>
        <hr className = "sidebarHr" />
        <ul className = "SidebarFriendList">
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          <li className = "sidebarFriend">
            <img className = "sidebarFriendImage" alt = "friends"  src  = "Assets/2.jpg" />
            <span className ="sidebarFriendName">Jane doe</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
