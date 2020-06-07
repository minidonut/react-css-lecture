import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({ to, text }) => {
  return <Link to={to}
    style={{
      color: "rgba(27, 28, 37, 0.9)",
      textDecoration: "none",
      padding: "16px",
      margin: "4px",
      border: "1px solid rgba(27, 28, 37, 0.2)",
      borderRadius: "4px",
      cursor: "pointer",
    }}>
    <p>{text}</p>
  </Link>;
};
