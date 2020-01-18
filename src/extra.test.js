import moxios from "moxios";
import { fetchPost } from "./actions";
import { types } from "./actions/types";

import { makeMockStore } from "./utils";

const mockSuccess = data => ({ status: 200, response: data });
const mockError = error => ({ status: 500, response: error });

describe("Dispatch", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe("Dispatch synchronous actions", () => {
    it("should dispatch action", () => {
      const addTodo = { type: "ADD_TODO" };
      const store = makeMockStore({});
      store.dispatch(addTodo);
      const actions = store.getActions();
      expect(actions).toEqual([addTodo]);
    });
  });

  describe("Execute with success", () => {
    it("should execute promise", () => {
      const response = ["some", "posts"];

      const store = makeMockStore();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(response));
      });

      return store.dispatch(fetchPost()).then(() => {
        const actual = store.getActions();
        console.log("state ", store.getState());
        expect(actual).toEqual([{ type: types.GET_POST, payload: response }]);
      });
    });

    describe("Execute with Error", () => {
      it("should execute promise", () => {
        const response = "error message";

        const store = makeMockStore();

        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith(mockError(response));
        });

        return store.dispatch(fetchPost()).then(() => {
          const actual = store.getActions();
          expect(actual).toEqual([{ type: "FETCH_ERROR" }]);
        });
      });
    });
  });
});
