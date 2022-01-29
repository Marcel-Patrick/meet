// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  constructor() {
    super();
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
    const { eventData } = this.props;
    return (
      <div className="event">
        {/* the by defauld showen informaiton */}
        <h1 className="event__summary">{eventData.summary}</h1>
        <p className="event__start">{eventData.start.dateTime}</p>
        <p className="event__timeZone">{eventData.start.timeZone}</p>
        {/* the collapsed information */}
        {!this.state.collapsed && (
          <div className="event__moreDetails">
            <p className="event__end">{eventData.end.dateTime}</p>
            <p className="event__description">{eventData.description}</p>
            <p className="event__location">{eventData.location}</p>
            <p className="event__calendarLink">{eventData.htmlLink}</p>
          </div>
        )}
        <button className="event__detailsButton" onClick={() => this.eventDetails()}>
          {this.state.detailsButtonText}
        </button>
      </div>
    );
  }
}
export default Event;
