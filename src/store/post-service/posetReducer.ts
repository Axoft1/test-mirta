import { AnyAction } from "redux";
import { FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "../types";
import { IPost } from "../../components/types";

interface state {
  posts: IPost[];
  loading: boolean
}
const initialState: state = {
  posts: [],
  loading: false,
};
export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
