import React, { Component } from 'react';

// functional component:
// const SearchBar = () =>{
//   return <input />;
// };

// class based component:
// class SearchBar extends React.Component {  // We add {Component } to first line and refactor this line deleting "React"
class SearchBar extends Component {
  constructor(props) {  // this is the only function which is called automaticly everytime We create instant variable.
    super(props); // parent method.
    // create a state!
    this.state = { term:'' } //  We write whatevet we want to accept change on or record.
  }
// here, input is a controlled component
  render(){
    return (
      <div>
      <input
      value = {this.state.term}
      onChange = { event => this.setState({ term: event.target.value})} />
      </div>
  )
 }
}



export default SearchBar;
