import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTestAttr, testStore } from "./utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "one",
          body: "one desc"
        },
        {
          title: "two",
          body: "two desc"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "App");
    expect(component.length).toBe(1);
  });

  it("should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exmpaleMethod_returnsAValue(6);

    expect(newValue).toBe(7);
  });
});
