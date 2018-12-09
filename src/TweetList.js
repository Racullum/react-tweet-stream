import React from 'react';
import Tweet from './Tweet';
import './TweetList.css';
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
                console.info(data);
                console.log(data);

                let newtweet = data.id_str;
                
                // Making sure we don't add a duplicate into the array 
                if(!(this.state.tweets.indexOf(newtweet) > -1))
                {
                  this.setState({tweets: this.state.tweets.unshift(newtweet)});
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
      
      <ul>
        {tweets}
      </ul>
    );
  }

}

export default TweetList;