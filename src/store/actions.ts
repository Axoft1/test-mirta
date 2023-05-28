import { FETCH_POSTS, HIDE_LOADER, REQUEST_POSTS, SHOW_LOADER } from "./types";

export function showLoader() {
    return {
      type: SHOW_LOADER,
    };
}
export function hideLoader() {
    return {
      type: HIDE_LOADER,
    };
}
export function fetchPosts() {  
  return {
    type: REQUEST_POSTS,
  };
}