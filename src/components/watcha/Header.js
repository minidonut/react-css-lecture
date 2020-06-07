import React from "react";
import { Link } from "react-router-dom";


export const SearchBar = () => {
  return <div className="Header-searchbar">
    <div>
    </div>
    <input type="text" placeholder="작품 제목,배우,감독을 검색해보세요." />
  </div>;
};

export const SignGroup = () => {
  return <div className="Header-signgroup">
    <Link data="signin" to="/">로그인</Link>
    <Link data="signup" to="/">회원가입</Link>
  </div>;
};


export const Header = () => {
  return <div className="Header-container">
    <Link to="/watcha" className="Header-home">
      <div className="Header-logo" />
    </Link>
    <SearchBar />
    <SignGroup />
  </div>;
};
