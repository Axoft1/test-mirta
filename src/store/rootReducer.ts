import { combineReducers } from "redux";
import { postReducer } from "./post-service/posetReducer";
// import { appReducer } from "./post-service/appReducer";
import { commentReducer } from "./comment-service/commentReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
//   app: appReducer,
  comment: commentReducer,
});
