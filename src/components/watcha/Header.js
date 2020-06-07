import React from "react";
import { Link } from "react-router-dom";
import { SignGroup } from "./SignGroup";


export const SearchBar = () => {
  return <div className="Header-searchbar">
    <div>
    </div>
    <input type="text" placeholder="작품 제목,배우,감독을 검색해보세요." />
  </div>;
};


export const Header = () => {
  return <div className="Header-container">
    <div className="Header-home">
      <Link to="/watcha">
        <div className="Header-logo" />
      </Link>
    </div>
    <SearchBar />
    <SignGroup />
  </div>;
};
