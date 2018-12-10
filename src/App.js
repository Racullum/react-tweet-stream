import React, { Component } from 'react';
import TweetListContainer from './TweetListContainer'
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App-TweetListContainer">
      <TweetListContainer/>
      </div>
    );
  }
}

export default App;
