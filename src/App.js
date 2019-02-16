import React, { Component } from 'react';
import TweetListContainer from './TweetListContainer'
import './css/App.css';
import SearchBar from './SearchBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searched: false };
  }
  render() {
    return (
      <div>
      { this.state.searched ? 
      [
        <div className="App-TweetListContainer">

        <TweetListContainer/>
        </div>
      ]
      :
      [
        <SearchBar onSubmit={(searched) => this.setState({searched: searched})}></SearchBar>
      ]
      
      }
      </div>
    );
  }
}

export default App;
