import React, { Component } from "react";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
