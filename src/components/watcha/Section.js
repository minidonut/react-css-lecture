import React from "react";
import { Link } from "react-router-dom";

export const Section = ({ title, children, more, height, link = "/" }) => {
  return <div className="Section-container">
    <div>
      <h2>{title}</h2>
      {more ? <Link to={link}>더보기</Link> : null}
    </div>
    <div className={"List-container" + (more ? "" : " big")}>
      {children}
    </div>
    <div className="divider" />
  </div>;
};

export const Item = () => {
  return <div className="Item-container">
  </div>;
};

export const PortraitItem = ({ src, title, subtitle, caption }) => {
  return <div className="Item-portrait-container">
    <img src={src} alt="poster" />
    <p className="text-title">{title}</p>
    <p className="text-subtitle">{subtitle}</p>
    <p className="text-caption">{caption}</p>
  </div>;
};
