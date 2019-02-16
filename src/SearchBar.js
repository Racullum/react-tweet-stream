import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    searchForWord = (e) => {
        e.preventDefault();
        // Send text to search endpoint
        fetch('/search', {
            method: 'post',
            body: JSON.stringify({'search': this.state.value}),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
              if(response.status == 200) {
                  this.props.onSubmit(true);
              }
            }
          )
        
    }

    render() {
        return(
            <form onSubmit={this.searchForWord}>
                <input type="text" name="searchTerm" placeholder="Search..." onChange={this.handleChange}></input>
                <input type="submit" name="submit"></input>
            </form>
        );
    }
    
}

export default SearchBar;