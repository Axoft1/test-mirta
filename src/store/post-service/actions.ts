import {
  COMMENT_POST_SEARCH,
  HIDE_LOADER,
  REQUEST_COMMENTS,
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
export function fetchComments(id: number) {
  return {
    type: REQUEST_COMMENTS,
    payload: { id },
  };
}
export function searchComment(name: number) {
  return {
    type: COMMENT_POST_SEARCH,
    payload: { name },
  };
}
