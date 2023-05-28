import { AnyAction } from "redux";
import {
  COMMENT_POST,
  SHOW_LOADER_COMMENT,
  HIDE_LOADER_COMMENT,
} from "../types";

const initialState = {
  comment: [],
  loading: false
};
export const commentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case COMMENT_POST:
      return { ...state, comment: action.payload };
    case SHOW_LOADER_COMMENT:
      return { ...state, loading: true };
    case HIDE_LOADER_COMMENT:
      return { ...state, loading: false };
    default:
      return state;
  }
};
