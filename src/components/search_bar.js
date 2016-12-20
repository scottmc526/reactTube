//import react and pull off component as variable called Component
import React, { Component } from 'react';

//class based component = one that needs to know about itself and be able to communicate with other components (needs to see what user typed in to input)
//must have render method
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
