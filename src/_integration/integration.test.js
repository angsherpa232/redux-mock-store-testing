import moxios from "moxios";
import { fetchPost } from "./../actions";

// originaly in the video testStore is used but here it is replaced with redux-mock-store
import { makeMockStore } from "./../utils";
import { types } from "./../actions/types";

const mockSuccess = data => ({ status: 200, response: data });
const mockError = error => ({ status: 500, response: error });

describe("fetchPost", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe("fetchPost actions with success", () => {
    test("Store is updated correctly", () => {
      const response = [
        {
          title: "Example title 1",
          body: "Some Text"
        },
        {
          title: "Example title 2",
          body: "Some Text"
        },
        {
          title: "Example title 3",
          body: "Some Text"
        }
      ];

      const store = makeMockStore();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(response));
      });

      return store.dispatch(fetchPost()).then(() => {
        const actual = store.getActions();
        expect(actual).toEqual([{ type: types.GET_POST, payload: response }]);
      });
    });
  });

  describe("fetchPost actions with error", () => {
    test("Store is not-updated", () => {
      const response = "error message";

      const store = makeMockStore();

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockError(response));
      });
      // return is important. without return test wont work as expected
      return store.dispatch(fetchPost()).then(() => {
        const actual = store.getActions();
        expect(actual).toEqual([{ type: "FETCH_ERROR" }]);
      });
    });
  });
});
