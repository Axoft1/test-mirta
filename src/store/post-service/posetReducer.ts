import { AnyAction } from "redux";
import {
  FETCH_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
  SAVE_ERROR_POSTS,
} from "../types";
import { IPost } from "../../components/types";
import { getPageCount } from "../../components/utils/page";

interface state {
  posts: IPost[];
  totalPage: number;
  loading: boolean;
  saveError: string;
}
const initialState: state = {
  posts: [],
  totalPage: 0,
  loading: false,
  saveError: "",
};
export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        error: null,
        posts: action.payload.data,
        totalPage: getPageCount(action.payload.headers["x-total-count"], 10),
      };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SAVE_ERROR_POSTS:
      return {
        ...state,
        saveError: action.payload,
      };
    default:
      return state;
  }
};
