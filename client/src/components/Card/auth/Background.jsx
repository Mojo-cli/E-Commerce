import React from "react";
import "./bg.css";

export default function Background({ children, cardStyle }) {
  return <div className={`login-container ${cardStyle}`}>{children}</div>;
}
