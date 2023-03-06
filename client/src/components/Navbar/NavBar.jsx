import React from "react";
import "./navbar.css";

export default function NavBar({ callFrom }) {
  return (
    <div className="navbar-container">
      <div className="left">
        <img src={require("../../assets/logo.png")} alt="logo" />
      </div>
      <div className="right"></div>
    </div>
  );
}
