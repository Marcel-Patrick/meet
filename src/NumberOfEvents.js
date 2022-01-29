//src/NumberOfEvents.js

import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    // stting the values for the default states
    this.state = {
      numberOfEvents: 32,
    };
  }

  updateNumberOfEvents = (event) => {
    this.setState({
      numberOfEvents: event.target.value,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <lable className="numberOfEvents__lable">Number of Events</lable>
        <input
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
