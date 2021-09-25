import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import FeedPage from "./views/FeedPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/home" component={LandingPage}></Route>
        <Route path="/feed" component={FeedPage}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
