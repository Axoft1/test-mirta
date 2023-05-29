import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POSTS } from "../types";

export function* sagaWatcherPosts() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker(action: any): Generator<any> {
  try {
    yield put(showLoader());
    const payload = yield call(getPosts, action.payload);
    yield put({ type: FETCH_POSTS, payload });
    yield delay(500);
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function getPosts(action: { limit: number; page: number }): Promise<any> {

  const  data  = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: action.limit,
        _page: action.page,
      },
    }
  );
  return data;
}
