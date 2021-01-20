import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import FeedPage from './components/views/FeedPage/FeedPage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/home" component={LandingPage}></Route>
          <Route path="/feed" component={FeedPage}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
