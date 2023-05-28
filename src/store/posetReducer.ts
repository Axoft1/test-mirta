import { AnyAction } from "redux";
import { FETCH_POSTS } from "./types";

const initialState = {
  posts: [],
};
export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS:
        return { ...state, posts: action.payload};
      default:
      return state;
  }
};
