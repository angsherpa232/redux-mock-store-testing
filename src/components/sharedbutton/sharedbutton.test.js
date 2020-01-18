import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../utils/index";
import SharedButton from "./";

const setUp = (props = {}) => {
  return shallow(<SharedButton {...props} />);
};

describe("ShareButton component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        buttonText: "btn text",
        emitEvent: () => {}
      };
      const propError = checkProps(SharedButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("Render without error", () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "button",
        emitEvent: mockFunc
      };
      wrapper = setUp(props);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
