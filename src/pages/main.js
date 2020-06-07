import React from "react";
import { LinkButton } from "../components/main";

const Page = () => {
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }}>
    <LinkButton text="Instagram" to="/instagram" />
    <LinkButton text="Facebook" to="/facebook" />
    <LinkButton text="Watcha" to="/watcha" />
  </div>;
};

export default Page;
