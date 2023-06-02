import { AnyAction } from "redux";
import {
  FETCH_COMMENTS,
  SHOW_LOADER_COMMENT,
  HIDE_LOADER_COMMENT,
  SAVE_ERROR_COMMENT,
} from "../types";
import { IComment } from "../../components/types";

interface state {
  comment: IComment[];
  loading: boolean;
  saveError: string
}
const initialState: state = {
  comment: [],
  loading: false,
  saveError:''
};
export const commentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comment: action.payload };
    case SHOW_LOADER_COMMENT:
      return { ...state, loading: true };
    case HIDE_LOADER_COMMENT:
      return { ...state, loading: false };
    case SAVE_ERROR_COMMENT:
      return {
        ...state,
        saveError: action.payload,
      };
    default:
      return state;
  }
};
