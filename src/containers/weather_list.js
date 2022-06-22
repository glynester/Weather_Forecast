import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData){
    return (
// rule behind adding a key in a re-act list we add it to the top level element in the list and it just has to be some unique piece of data
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render(){
    return (
      // <div>WeatherList</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
 
// function mapStateToProps(state){
//  return { weather: state.weather }
// }
function mapStateToProps({weather}){
  return { weather }
 }

export default connect(mapStateToProps)(WeatherList); // we're exporting the connected version of weatherlist.