//used to create and manage components
import React, { Component } from 'react';
//used to interact with DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';


class App extends {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    //if you have key and value with same string you can refactor to just the key ie {videos: videos} becomes {videos}
    YTSearch({key: API_KEY, term: 'surfing'}, (videos) => {
      this.setState({ videos });
    })
  }
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//downwards data flow = the most parent component should be responsible for fetching data that other components need to have access to.
