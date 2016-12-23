//import react and pull off component as variable called Component
import React, { Component } from 'react';

//class based component = one that needs to know about itself and be able to communicate with other components (needs to see what user typed in to input)
//must have render method
class SearchBar extends Component {

  constructor (props) {
    //super is a method of Component class
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          className='search-bar'
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    //term:term
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

//state = plain js object that is used to record and react to user events. Each class based component has its own state object. Whenever component state is changed it rerenders and forces all children to rerender.
