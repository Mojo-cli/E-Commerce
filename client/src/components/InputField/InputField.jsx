import React from "react";
import "./inputfield.css";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

export default function InputField({
  onChange,
  label,
  inputStyles,
  placeHolder,
  type,
  visibility,
  onIconClick,
  showIcons,
  required
}) {
  function iconRenderer() {
    
    return (
      <>
        {showIcons ? (
          visibility ? (
            <EyeInvisibleFilled
              style={{ color: "#F2F1E8" }}
              onClick={onIconClick}
            />
          ) : (
            <EyeFilled style={{ color: "#F2F1E8" }} onClick={onIconClick} />
          )
        ) : null}
      </>
    );
  }

  return (
    <div className="if-container">
      {label ? <label className="label">{label}</label> : null}

      <div className="field-row">
        <input
          type={type}
          className={`input ${inputStyles}`}
          placeholder={placeHolder}
          onChange={onChange}
          required={required}
        />
        {showIcons ? iconRenderer() : null}
      </div>
    </div>
  );
}
