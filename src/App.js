import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as Page from "./pages";
import initStore from "./redux";
const store = initStore();



function App() {
  return (<BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={Page.Main} />
      <Route path="/instagram" component={Page.Instagram} />
      <Route path="/facebook" component={Page.Facebook} />
      <Route path="/watcha" component={Page.Watcha} />
    </Provider>
  </BrowserRouter>
  );
}

export default App;
