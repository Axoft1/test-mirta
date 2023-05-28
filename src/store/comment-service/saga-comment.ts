import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader } from "./actions";
import { COMMENT_POST, REQUEST_COMMENTS } from "../types";

export function* sagaWatcherComment() {
  yield takeEvery(REQUEST_COMMENTS, sagaWorker);
}

function* sagaWorker(action: any): Generator<any> {
  console.log(action);
  try {
    yield put(showLoader());

    const payload = yield call(getComments, action.payload.id);
    yield put({ type: COMMENT_POST, payload });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function getComments(id: number): Promise<any> {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
}
