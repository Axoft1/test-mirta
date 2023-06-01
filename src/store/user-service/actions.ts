import {
  HIDE_LOADER_USER,
  REQUEST_USER,
  SHOW_LOADER_USER,
} from "../types";

export function showLoader() {
  return {
    type: SHOW_LOADER_USER,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADER_USER,
  };
}

export function fetchUser(id: any) {
  return {
    type: REQUEST_USER,
    payload: { id },
  };
}