//used to create and manage components
import React from 'react';
//used to interact with DOM
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA3rJ41uVetgnXr50rOb8G26i1TM8or46E';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
