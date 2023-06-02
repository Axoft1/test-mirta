import { AnyAction } from "redux";
import { HIDE_LOADER_USER, SHOW_LOADER_USER, FETCH_USER, USER_ERROR_COMMENT } from "../types";
import { IPost, IUser } from "../../components/types";

interface state {
  user: IUser;
  userPosts: IPost[];
  loading: boolean;
  saveError: string;
}
const initialState: state = {
  user: {} as IUser,
  userPosts: [] as IPost[],
  loading: false,
  saveError: "",
};
export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload.payloadUser,
        userPosts: action.payload.payloadUserPosts,
      };
    case SHOW_LOADER_USER:
      return { ...state, loading: true };
    case HIDE_LOADER_USER:
      return { ...state, loading: false };
    case USER_ERROR_COMMENT:
      return {
        ...state,
        saveError: action.payload,
      };
    default:
      return state;
  }
};
