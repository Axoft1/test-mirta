import {
  HIDE_LOADER_COMMENT,
  REQUEST_COMMENTS,
  SHOW_LOADER_COMMENT,
} from "../types";

export interface IActionsComment {
  type: string;
  payload?: { id:number };
}
export function showLoader(): IActionsComment {
  return {
    type: SHOW_LOADER_COMMENT,
  };
}
export function hideLoader(): IActionsComment {
  return {
    type: HIDE_LOADER_COMMENT,
  };
}
export function fetchComments(id: number): IActionsComment {
  return {
    type: REQUEST_COMMENTS,
    payload: { id },
  };
}
