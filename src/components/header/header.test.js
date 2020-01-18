import React from "react";
import { shallow } from "enzyme";
import Header from "./";

import { findByTestAttr } from "../../utils";

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("render header component without error", () => {
    const header = findByTestAttr(component, "header");
    expect(header.length).toBe(1);
  });
});
