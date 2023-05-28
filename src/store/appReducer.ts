import { AnyAction } from "redux";
import { HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
  alert: null,
};

export const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
