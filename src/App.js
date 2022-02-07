import React, { Component } from "react";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Alert from "react-bootstrap/Alert";
import WelcomeScreen from "./WelcomeScreen";

import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    showWelcomeScreen: undefined,
    numberOfEvents: 32,
    location: "all",
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" ? events : events.filter((event) => event.location === location);
      const eventNumberFilter =
        eventCount > locationEvents.length ? locationEvents : locationEvents.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: eventNumberFilter,
        });
      }
    });
  };

  async componentDidMount() {
    this.mounted = true;
    // Only attempt to access Google API if online
    if (navigator.onLine) {
      const accessToken = localStorage.getItem("access_token");
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events: events.slice(0, this.state.numberOfEvents),
              locations: extractLocations(events),
            });
          }
        });
      }
    }
    // If offline, skip to getEvents. This function grabs from localStorage when offline.
    else {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEventNumbers = (eventNumbers) => {
    this.setState({
      numberOfEvents: eventNumbers,
    });
    this.updateEvents(this.state.location, eventNumbers);
  };

  render() {
    const logo = require("./meetUp_logo_transparent.webp"); // with require
    if (this.state.showWelcomeScreen === true)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );
    return (
      <div className="App">
        <Navbar sticky="top" bg="light" expand="lg" variant="light" className="mb-3">
          <Container fluid>
            <Navbar.Brand className="navbar-logo">
              <img
                src={logo}
                width="80"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>
                  {" "}
                  <NumberOfEvents updateEventNumbers={this.updateEventNumbers} />
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {!navigator.onLine && (
          <Alert variant="warning" style={{ textAlign: "center" }}>
            Attention: You run this App now in offline mode! Neu Events can not be loaded.
          </Alert>
        )}
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
