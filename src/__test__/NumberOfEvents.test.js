//__test__/NumberOfEvents.test.js

import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number of events", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render lable for numberOfEvents", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents__lable")).toHaveLength(1);
  });

  test("render input for numberOfEvents", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents__input")).toHaveLength(1);
  });

  test("render number of events 32 by default", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("changed number of Event state, when input number is changed by user", () => {
    const eventObject = { target: { value: 16 } };
    NumberOfEventsWrapper.find(".numberOfEvents__input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(16);
  });
});
