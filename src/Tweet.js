import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

class Tweet extends React.Component {


    render() {
        return(
            <div>
                 <TwitterTweetEmbed tweetId={this.props.tweetId}></TwitterTweetEmbed>
            </div>
        );
    }
    
}

export default Tweet;
