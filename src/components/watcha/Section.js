import React from "react";
import { Link } from "react-router-dom";

export const Section = ({ title, children, more, link = "/" }) => {
  return <div className="Section-container">
    <div>
      <h2>{title}</h2>
      {more ? <Link to={link}>더보기</Link> : null}
    </div>
    <div>
      {children}
    </div>
    <div className="divider" />
  </div>;
};

export const SmallItem = () => {
  return <div className="SmallItem-container">
  </div>;
};
