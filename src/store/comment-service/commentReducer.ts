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
  saveErrorComment: null | string;
}
const initialState: state = {
  comment: [],
  loading: false,
  saveErrorComment: null
};
export const commentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, saveErrorComment: null, comment: action.payload };
    case SHOW_LOADER_COMMENT:
      return { ...state, loading: true };
    case HIDE_LOADER_COMMENT:
      return { ...state, loading: false };
    case SAVE_ERROR_COMMENT:
      return {
        ...state,
        saveErrorComment: action.payload,
      };
    default:
      return state;
  }
};
