import React from "react";

import "./Button.css";

const Button = ({
  children,
  onClick,
  height = "2.5rem",
  backgroundColor = "#013369",
  color = "#FFF",
  fontSize = "15px",
  hoverBackgroundColor = "#0056b3",
  disabled,
  type
}) => {
  return (
    <button
      id="custom-button"
      className="px-4 font-semibold"
      style={{
        height: height,
        backgroundColor: !disabled ? backgroundColor : "#b5bcc4",
        color: color,
        fontSize: fontSize,
        ":hover": {
          backgroundColor: hoverBackgroundColor,
        },
      }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
