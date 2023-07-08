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
}) => {
  return (
    <button
      id="custom-button"
      className="px-4 font-semibold"
      style={{
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize,
        ":hover": {
          backgroundColor: hoverBackgroundColor,
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
