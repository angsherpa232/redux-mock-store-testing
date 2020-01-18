import checkPropTypes from "check-prop-types";
import configureStore from "redux-mock-store";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./../reducer";
import thunk from "redux-thunk";
import { middlewares } from "./../createStore";

export const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
};

const mockStore = configureStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state
  });
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
