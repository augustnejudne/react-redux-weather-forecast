import React, { Component, Fragment } from 'react';
import { fetchWeather } from '../actions';
import { connect } from 'react-redux';

class SearchForm extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.inputRef.current.value);
    this.inputRef.current.value = '';
    // console.log(this.inputRef.current.value);
  }

  render() {
    this.props.fetchWeather('Manila');
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="u-full-width" ref={this.inputRef} autoFocus />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default connect( null, { fetchWeather })(SearchForm);
