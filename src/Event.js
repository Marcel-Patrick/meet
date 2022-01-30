// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    // stting the values for the default states
    this.state = {
      collapsed: true,
      detailsButtonText: "More Details",
    };
  }

  // definding the event handler for the show/hide Details Button
  eventDetails = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      detailsButtonText: this.state.collapsed ? "Less Details" : "More Details",
    });
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        {/* the by defauld showen informaiton */}
        <h1 className="event__summary">{event.summary}</h1>
        <p className="event__start">{event.start.dateTime}</p>
        <p className="event__timeZone">{event.start.timeZone}</p>
        {/* the collapsed information */}
        {!this.state.collapsed && (
          <div className="event__moreDetails">
            <p className="event__end">{event.end.dateTime}</p>
            <p className="event__description">{event.description}</p>
            <p className="event__location">{event.location}</p>
            <p className="event__calendarLink">{event.htmlLink}</p>
          </div>
        )}
        <button className="event__detailsButton details-btn" onClick={() => this.eventDetails()}>
          {this.state.detailsButtonText}
        </button>
      </div>
    );
  }
}
export default Event;
