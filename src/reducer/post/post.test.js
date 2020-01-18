import { types } from "../../actions/types";
import postReducer from "./postReducer";

describe("Post reducer", () => {
  it("should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should return new state if receving type", () => {
    const posts = [
      {
        title: "1",
        body: "this is body"
      }
    ];
    const newState = postReducer(undefined, {
      type: types.GET_POST,
      payload: posts
    });

    expect(newState).toEqual(posts);
  });
});
