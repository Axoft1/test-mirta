import { AnyAction } from "redux";
import {
  COMMENT_POST_SEARCH,
  FETCH_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
} from "../types";
import { IPost } from "../../components/types";
import { getPageCount } from "../../components/utils/page";

interface state {
  posts: IPost[];
  totalPage: number;
  loading: boolean;
}
const initialState: state = {
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
        totalPage: getPageCount(action.payload.headers["x-total-count"], 10),
      };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case COMMENT_POST_SEARCH:
      console.log("state", action.payload.name);
    
      return {
        ...state,
        posts: state.posts.find(
          (state) =>
            state.title.includes(action.payload.name) 
        ),
      };
    default:
      return state;
  }
};
