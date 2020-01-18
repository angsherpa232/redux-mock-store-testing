import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../utils";
import HeadLine from "./";

const setUp = (props = {}) => {
  return shallow(<HeadLine {...props} />);
};

describe("HeadLine component", () => {
  describe("Headline propTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "posts",
        desc: "header desc",
        tempArr: [
          {
            fName: "test",
            lName: "test",
            email: "test",
            age: 24,
            online: false
          }
        ]
      };
      const propError = checkProps(HeadLine, expectedProps);

      expect(propError).toBeUndefined();
    });
  });

  describe("Headline without props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("shouldnot render without header", () => {
      const component = findByTestAttr(wrapper, "headLine");
      expect(component.length).toBe(0);
    });
  });

  describe("Headline with props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "header",
        desc: "header desc"
      };
      wrapper = setUp(props);
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "headLine");
      expect(component.length).toBe(1);
    });

    it("should render a h1", () => {
      const component = findByTestAttr(wrapper, "header");
      expect(component.length).toBe(1);
    });
  });
});
