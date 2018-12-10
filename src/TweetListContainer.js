import React from 'react';
import './css/TweetListContainer.css';
import TweetList from './TweetList';

class TweetListContainer extends React.Component {

    render() {

        return(
            <div className="TweetListContainer-TweetList">
            <TweetList></TweetList>
            </div>
        );

      }

}

export default TweetListContainer;
