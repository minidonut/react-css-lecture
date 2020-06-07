import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Instagram, Watcha, Youtube } from "./pages";

const LinkButton = ({ to, text }) => {
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

const Main = () => {
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }}>
    <LinkButton text="Instagram" to="/instagram" />
    <LinkButton text="Youtube" to="/youtube" />
    <LinkButton text="Watcha" to="/watcha" />
  </div>;
};

function App() {
  return (<BrowserRouter>
    <Route exact path="/" component={Main} />
    <Route path="/instagram" component={Instagram} />
    <Route path="/youtube" component={Youtube} />
    <Route path="/watcha" component={Watcha} />
  </BrowserRouter>
  );
}

export default App;
