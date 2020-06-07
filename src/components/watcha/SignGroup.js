import React from "react";
import { Link } from "react-router-dom";

export const SignGroup = () => {
  return <div className="Header-signgroup">
    <Link data="signin" to="/">로그인</Link>
    <Link data="signup" to="/">회원가입</Link>
  </div>;
};
