import { types } from "./types";
import axios from "axios";

export const fetchPost = () => async dispatch => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => {
      dispatch({
        type: types.GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: "FETCH_ERROR"
      });
    });
};
