import { AnyAction } from "redux";
import {
  HIDE_LOADER_USER,
  SHOW_LOADER_USER,
  FETCH_USER,
  SAVE_ERROR_USER,
} from "../types";
import { IPost, IUser } from "../../components/types";

interface state {
  user: IUser;
  userPosts: IPost[];
  loading: boolean;
  saveErrorUser: null | string;
}
const initialState: state = {
  user: {} as IUser,
  userPosts: [] as IPost[],
  loading: false,
  saveErrorUser: null
};
export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        saveErrorUser: null,
        user: action.payload.payloadUser,
        userPosts: action.payload.payloadUserPosts,
      };
    case SHOW_LOADER_USER:
      return { ...state, loading: true };
    case HIDE_LOADER_USER:
      return { ...state, loading: false };
    case SAVE_ERROR_USER:
      return {
        ...state,
        saveError: action.payload,
      };
    default:
      return state;
  }
};
