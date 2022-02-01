import React, { Component } from "react";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
  };

  updateEvents = (location) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" ? events : events.filter((event) => event.location === location);
      const eventNumberFilter =
        this.state.numberOfEvents > locationEvents.length
          ? locationEvents
          : locationEvents.slice(0, this.state.numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventNumberFilter,
        });
      }
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEventNumbers = (eventNumbers) => {
    this.setState({
      numberOfEvents: eventNumbers,
    });
    this.updateEvents(this.state.location);
  };

  render() {
    return (
      <div className="App">
        <NumberOfEvents updateEventNumbers={this.updateEventNumbers} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
