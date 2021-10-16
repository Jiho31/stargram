import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import FeedPage from "./views/FeedPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setIsLogin(true);
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          {!isLogin && <LandingPage />}
          {isLogin && <FeedPage />}
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
