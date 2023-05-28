import {
  HIDE_LOADER_COMMENT,
  REQUEST_COMMENTS,
  SHOW_LOADER_COMMENT,
} from "../types";
export function showLoader() {
  return {
    type: SHOW_LOADER_COMMENT,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER_COMMENT,
  };
}
export function fetchComments(id: number) {
  return {
    type: REQUEST_COMMENTS,
    payload: { id },
  };
}
