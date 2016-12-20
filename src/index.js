//used to create and manage components
import React from 'react';
//used to interact with DOM
import ReactDOM from 'react-dom'

const App = () => {
  return <div> Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));
