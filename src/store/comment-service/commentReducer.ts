import { AnyAction } from "redux";
import {
  FETCH_COMMENTS,
  SHOW_LOADER_COMMENT,
  HIDE_LOADER_COMMENT,
} from "../types";
import { IComment } from "../../components/types";

interface state {
  comment: IComment[];
  loading: boolean;
}
const initialState: state = {
  comment: [],
  loading: false,
};
export const commentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comment: action.payload };
    case SHOW_LOADER_COMMENT:
      return { ...state, loading: true };
    case HIDE_LOADER_COMMENT:
      return { ...state, loading: false };
    default:
      return state;
  }
};
