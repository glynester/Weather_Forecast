import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={ term: '' };
    this.onInputChange=this.onInputChange.bind(this); // bind the value of 'this'. "this" is the SearchBar.
    //  then replace onInputChange with this new bound instance of this function.
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  // onInputChange(term){
  //   this.setState({term});
  //   console.log("term=>",this.state.term)
  // }
  onInputChange(event){
    this.setState({ term: event.target.value });
    console.log("term=>",this.state.term);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); // Will clear out input on form.
    // console.log("XXX",x);
  }

  render(){
    return (
    <form onSubmit={this.onFormSubmit} className="input-group">
       {/* Std browser behaviour - If you press enter on your keyboard while a form element child (like the input or the button is focused), the browser automatically thinks that you're trying to submit the contents of this form - so makes post request to server. Add event hadler to form to prevent this.*/}
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
//  Need to hook up the action creator fetchweather to our search bar container.
  function mapDispatchToProps(dispatch){
    // Make sure that that action flows down into the middleware and then the reducers inside of our redux application.
    return bindActionCreators({ fetchWeather }, dispatch);
}

//  mapDispatchToProps always goes in as the second argument.
export default connect(null, mapDispatchToProps)(SearchBar);

// it definitely needs to be able to talk to Redux which means we definitely are going to want to make it a container because a container has the ability to talk to redux whereas a normal component does not.