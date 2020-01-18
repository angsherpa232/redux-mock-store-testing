import React from "react";
import { shallow } from "enzyme";

import ListItem from "./";
import { findByTestAttr, checkProps } from "../../utils/index";

describe("ListItem Component", () => {
  describe("Checking Proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "list",
        desc: "list desc"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "title",
        desc: "title desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Component without props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "title desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
