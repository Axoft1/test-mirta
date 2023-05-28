import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "../types";

export function* sagaWatcherPosts() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker(): Generator<any> {
  try {
    yield put(showLoader());
    const payload = yield call(getPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function getPosts(): Promise<any> {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}
