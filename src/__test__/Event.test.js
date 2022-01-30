import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("Event render", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  // Start testing the by default showen information
  test("Event summary render", () => {
    expect(EventWrapper.find(".event__summary")).toHaveLength(1);
  });

  test("Event summary render with the right data", () => {
    let eventSummary = event.summary;
    expect(EventWrapper.find(".event__summary").at(0).text()).toBe(eventSummary);
  });

  test("Event startTime render", () => {
    expect(EventWrapper.find(".event__start")).toHaveLength(1);
  });

  test("Event startTime render with the right data", () => {
    let eventStartTime = event.start.dateTime;
    expect(EventWrapper.find(".event__start").at(0).text()).toBe(eventStartTime);
  });

  test("Event timeZone render", () => {
    expect(EventWrapper.find(".event__timeZone")).toHaveLength(1);
  });

  test("Event timeZone render with the right data", () => {
    let eventTimeZone = event.start.timeZone;
    expect(EventWrapper.find(".event__timeZone").at(0).text()).toBe(eventTimeZone);
  });

  // Start testing the collapsed functions

  test("Event state collapsed by default equal true", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("render details button", () => {
    expect(EventWrapper.find(".event__detailsButton")).toHaveLength(1);
  });

  test("after details button is clicked, Event state collapsed changes from true to false", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".event__detailsButton").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("after details button is clicked, Event state collapsed changes from false to true", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".event__detailsButton").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("check details button text is equal to more details by default", () => {
    expect(EventWrapper.state("detailsButtonText")).toBe("More Details");
  });

  test("after more details button is clicked, button text changes to less details", () => {
    EventWrapper.setState({
      detailsButtonText: "More Details",
    });
    EventWrapper.find(".event__detailsButton").simulate("click");
    expect(EventWrapper.state("detailsButtonText")).toBe("Less Details");
  });

  test("after less details button is clicked, button text changes to more details", () => {
    EventWrapper.setState({
      detailsButtonText: "Less Details",
    });
    EventWrapper.find(".event__detailsButton").simulate("click");
    expect(EventWrapper.state("detailsButtonText")).toBe("More Details");
  });

  test("by default Event details shall be collapsed", () => {
    expect(EventWrapper.find(".event__moreDetails")).toHaveLength(0);
  });

  test("by default Event details shall be collapsed", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".event__detailsButton").simulate("click");
    expect(EventWrapper.find(".event__moreDetails")).toHaveLength(1);
  });

  // Start testing the collapsed information

  test("Event endTime render", () => {
    expect(EventWrapper.find(".event__end")).toHaveLength(1);
  });

  test("Event endTime render with the right data", () => {
    let eventEndTime = event.end.dateTime;
    expect(EventWrapper.find(".event__end").at(0).text()).toBe(eventEndTime);
  });

  test("Event location render", () => {
    expect(EventWrapper.find(".event__location")).toHaveLength(1);
  });

  test("Event location render with the right data", () => {
    let eventLocation = event.location;
    expect(EventWrapper.find(".event__location").at(0).text()).toBe(eventLocation);
  });

  test("Event description render", () => {
    expect(EventWrapper.find(".event__description")).toHaveLength(1);
  });

  test("Event description render with the right data", () => {
    let eventDescription = event.description;
    expect(EventWrapper.find(".event__description").at(0).text()).toBe(eventDescription);
  });

  test("Event calendarLink render", () => {
    expect(EventWrapper.find(".event__calendarLink")).toHaveLength(1);
  });

  test("Event calendarLink render with the right data", () => {
    let eventCalendarLink = event.htmlLink;
    expect(EventWrapper.find(".event__calendarLink").at(0).text()).toBe(eventCalendarLink);
  });
});
