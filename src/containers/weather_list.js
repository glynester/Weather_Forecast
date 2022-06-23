import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine  } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData){
    let temps = cityData.list.map(vals=>vals.main.temp);
    let pressure = cityData.list.map(vals=>vals.main.pressure);
    let humidity = cityData.list.map(vals=>vals.main.humidity);
    console.log("temps",temps);
    return (
      // rule behind adding a key in a React list - add it to the top level element in the list and it just has to be some unique piece of data.
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color="purple" />
          </Sparklines>
        </td>
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