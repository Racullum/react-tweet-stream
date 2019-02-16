import React from 'react';
import SearchBar from './SearchBar';

class SearchBarContainer extends React.Component {


    render() {
        return(
            <SearchBar onSubmit={this.props.onSubmit}></SearchBar>
        );
    }
    
}

export default SearchBarContainer;