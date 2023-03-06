import React from "react";
import "./button.css";

export default function Button({ title, buttonStyle, onClick }) {
  return (
    <button className={`btn-container ${buttonStyle}`} onClick={onClick}>
      {title}
    </button>
  );
}
