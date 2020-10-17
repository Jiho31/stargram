import React, { Component } from 'react';
import LandingPage from './components/views/LandingPage/LandingPage';

class App extends Component {
  state = {
    count: 0,
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
