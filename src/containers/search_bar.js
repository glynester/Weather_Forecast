import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={ term: '' };
    this.onInputChange=this.onInputChange.bind(this); // bind the value of 'this'. "this" is the SearchBar.
    //  then replace onInputChange with this new bound instance of this function.

  // onInputChange(term){
  //   this.setState({term});
  //   console.log("term=>",this.state.term)
  // }
  onInputChange(event){
    this.setState({ term: event.target.value });
    console.log("term=>",this.state.term)
  }

  render(){
    return (
    <form className="input-group">
      <input 
        placeholder="Get a 5 day forecast in your favourite cities"
        className='form-control'
        value={this.state.term} // Makes it a controlled component.
        // onChange={e=>this.onInputChange(e.target.value)}
        onChange={this.onInputChange}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
      </span>
    </form>)
  }
}

export default SearchBar;

// it definitely needs to be able to talk to Redux which means we definitely are going to want to make it a container because a container has the ability to talk to redux whereas a normal component does not.