import {
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER,
} from "../types";

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
export function fetchPosts(limit: number, page: number) {
  return {
    type: REQUEST_POSTS,
    payload: { limit, page },
  };
}

