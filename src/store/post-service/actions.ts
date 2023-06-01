import {
  HIDE_LOADER,
  REQUEST_POSTS,
  SEARCH_POSTS,
  SHOW_LOADER,
  SORT_POSTS,
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
export function sortPosts() {
  return {
    type: SORT_POSTS,
  };
}
export function searchPosts(el:string) {
  return {
    type: SEARCH_POSTS,
    payload: el
  };
}
