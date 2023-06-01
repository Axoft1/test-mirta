import { combineReducers } from "redux";
import { postReducer } from "./post-service/posetReducer";
import { commentReducer } from "./comment-service/commentReducer";
import { userReducer } from "./user-service/userReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  comment: commentReducer,
  user: userReducer
});
