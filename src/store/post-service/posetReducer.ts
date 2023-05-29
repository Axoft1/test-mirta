import { AnyAction } from "redux";
import {
  SEARCH_POSTS,
  FETCH_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
  SORT_POSTS,
} from "../types";
import { IPost } from "../../components/types";
import { getPageCount } from "../../components/utils/page";

interface state {
  defPosts: IPost[];
  posts: IPost[];
  totalPage: number;
  loading: boolean;
}
const initialState: state = {
  defPosts: [],
  posts: [],
  totalPage: 0,
  loading: false,
};
export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        defPosts: action.payload.data,
        totalPage: getPageCount(action.payload.headers["x-total-count"], 10),
      };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SORT_POSTS:
      return {
        ...state,
        defPosts: state.posts.sort((a, b) => a.title.localeCompare(b.title)),
      };
    case SEARCH_POSTS:
      return {
        ...state,
        defPosts: state.posts.filter((a) =>
          a.title.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
