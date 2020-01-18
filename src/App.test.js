import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import App from "./App";

import { findByTestAttr, makeMockStore } from "./utils";
import { exmpaleMethod_returnsAValue } from "./App";

const setUp = (initialState = {}) => {
  const store = makeMockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return component;
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

  // it("should update state as expected", () => {
  //   const btn = wrapper.find(SharedButton);
  //   act(() => btn.props().emitEvent());
  //   expect(btn.length).toBe(1);
  // });

  it("should return value as expected", () => {
    const newValue = exmpaleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });
});
