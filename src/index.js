//used to create and manage components
import React from 'react';
//used to interact with DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';

YTSearch({key: API_KEY, term: 'surfing'}, function(data) {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

//downwards data flow = the most parent component should be responsible for fetching data that other components need to have access to.
