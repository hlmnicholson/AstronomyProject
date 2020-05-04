import React, { Component } from 'react';
import './App.css';
import AstronomyContainer from './components/AstronomyContainer.js';


class App extends Component {
  render() {
    return (
      <>
      <h1>APOD: Astronomy Picture of the Day</h1>
      <AstronomyContainer />
      </>
    );
  }
}

export default App;
