import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

class WeatherList extends Component {
  // if (this.props.weather) {return <div>x</div>}
  renderWeather(cityData){
    let temps = _.map((cityData.list.map(vals=>vals.main.temp)), (kelvin)=>kelvin-273.15);
    let pressure = cityData.list.map(vals=>vals.main.pressure);
    let humidity = cityData.list.map(vals=>vals.main.humidity);
    console.log("temps",temps);
    let colours=[ "red", "orange", "crimson", "maroon", "brown", "salmon", "green", "blue", "indigo", "violet", "black" ];
    const randomColour = a=>a[Math.floor(Math.random() * a.length)];
    let units=["°c", "hPa", "%"]
    let charts=[temps, pressure, humidity].map((data,i)=>{
      return (
        <td>
          <Chart data={data} colour={randomColour(colours)} units={units[i]}/>
        </td>
      )
    })
    return (
      // rule behind adding a key in a React list - add it to the top level element in the list and it just has to be some unique piece of data.
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        {charts}
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
            <th>Temperature (°c)</th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%)</th>
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