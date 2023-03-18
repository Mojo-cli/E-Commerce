import React from "react";
import { MenuData } from "../../data/MenuData";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

export default function NavBar({ callFrom, active, setActive }) {
  return (
    <div
      className={
        callFrom !== "home"
          ? "navbar-container-auth"
          : !active
          ? "navbar-container"
          : "h-navcont-resp"
      }
    >
      <div className={callFrom !== "home" ? "left-auth" : "left"}>
        <img src={require("../../assets/logo.png")} alt="logo" />

        {callFrom === "home" ? (
          <div className={!active ? "category-menu-container" : "v-cm-rep"}>
            {MenuData.map((data) => (
              <MenuCard svg={data.img} title={data.title} key={data.id} />
            ))}
          </div>
        ) : null}

        {callFrom === "home" ? (
          <div className="burger" onClick={setActive}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ) : null}
      </div>
      <div className={!active ? "right" : "v-right-resp"}>
        {callFrom === "home" ? <SearchBar /> : null}
      </div>
    </div>
  );
}

function MenuCard({ svg, title }) {
  return (
    <div className="category-container" onClick={() => {}}>
      <img src={svg} alt="" />
      <span className="category-title">{title}</span>
    </div>
  );
}
