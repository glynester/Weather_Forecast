import React, { Component } from 'react';

class GoogleMap extends Component{
  componentDidMount(){
    // const google = window.google;
    // To create embedded google map inside of our doc.
    new google.maps.Map(this.refs.map,{
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      // The ref system allows us to get a direct reference to an HTML element that has been rendered to the page. I can get a direct reference to the div that was created right here by referring to this.refs.map.
    <div ref='map'>GOOGLE MAP</div>
    )
  }
}

export default GoogleMap;

// This is note is for students who are using Create React App, instead of the ReduxSimpleStarter boilerplate. If you are not using Create React App, please skip ahead to the next lecture.

// In the next lecture you will get an error, 'google' is not defined no-undef. To fix this we need to read the global variable from the window object. Add the following  to your google_map component's life cycle method right above your map code:

//     ...
//     const google = window.google; // <- ADD THIS LINE
//     new google.maps.Map(this.refs.map, {
//     ...

// If you still do not see your map, there may be an issue in your styles.css file, please check the QA or create new post for assistance. 