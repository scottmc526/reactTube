//used to create and manage components
import React, { Component } from 'react';
//used to interact with DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    //if you have key and value with same string you can refactor to just the key ie {videos: videos} becomes {videos}
    YTSearch({key: API_KEY, term: 'bowling'}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      });
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(video) => this.setState({selectedVideo: video})}  
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

//only use curly braces when referencing javaScript variable inside jsx

//downwards data flow = the most parent component should be responsible for fetching data that other components need to have access to.

//passing props means to pass data in react
//passing prop videos to videoList
