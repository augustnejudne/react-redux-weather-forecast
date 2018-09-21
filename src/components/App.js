import React, { Component } from 'react';
import SearchForm from './SearchForm';
import WeatherList from './WeatherList';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class App extends Component {
  handleClick = () => {
    this.props.fetchWeather();
  }

  render() {
    return (
      <div className="container">
        <h1>React-Redux Weather Forecast App</h1>
        <SearchForm />
        <WeatherList />
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps, { fetchWeather })(App);