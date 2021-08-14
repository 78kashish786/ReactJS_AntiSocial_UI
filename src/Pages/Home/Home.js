import React from "react";
import "./home.css";
import Topbar from "../../components/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}