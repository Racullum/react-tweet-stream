import React, { Component } from 'react';
import logo from './logo.svg';
import TweetListContainer from './TweetListContainer'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './App.css';


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
