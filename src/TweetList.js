import React from 'react';
import Tweet from './Tweet';
import './css/TweetList.css';
import socketIOClient from 'socket.io-client';


class TweetList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tweets: [] };
  
    }


    componentDidMount() {
        const socket = socketIOClient('localhost:3001/');

        socket.on('connect', () => {
            console.log("Connected");
            socket.on("tweets", data => {

                let newtweet = data.id_str;
                
                // Making sure we don't add a duplicate into the array 
        
                if(!(this.state.tweets.includes(newtweet)))
                {
                  const oldstate = this.state.tweets;
                  oldstate.unshift(newtweet);
                  const newstate = oldstate;
                  this.setState({tweets: newstate});
                  
                }
                
            });
        });

        socket.on('disconnect', () => {
            socket.off("tweets")
            socket.removeAllListeners("tweets");
            console.log("Socket Disconnected");
          });
    }

    
  render() {

    let tweets = this.state.tweets.map((tweet) =>
      <li key={tweet}>
        <Tweet tweetId={tweet}></Tweet>
      </li>
    );    
    
    return(
      <div>
      {
        this.state.tweets.length > 0 ? 
        [
          <ul>
            {tweets}
          </ul>
        ]
        :
        [
          <h1>
            No Tweets Yet
          </h1>
        ]
      }
    </div>
    );
  }

}

export default TweetList;