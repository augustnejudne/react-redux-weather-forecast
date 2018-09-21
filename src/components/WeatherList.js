import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name, id } = cityData.city;
    const temp = cityData.list.map(t => t.main.temp);
    const pressure = cityData.list.map(t => t.main.pressure);
    const humidity = cityData.list.map(t => t.main.humidity);

    return (
      <tr key={id}>
        <td>{name}</td>
        <Chart data={temp} color="red" units="K"/>
        <Chart data={pressure} color="green" units="hPa" />
        <Chart data={humidity} color="blue" units="%" />
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  };
}

export default connect( mapStateToProps, null)(WeatherList);
