import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader } from "./actions";
import { FETCH_COMMENTS, REQUEST_COMMENTS } from "../types";
import { IComment } from "../../components/types";

export function* sagaWatcherComment() {
  yield takeEvery(REQUEST_COMMENTS, sagaWorker);
}

function* sagaWorker(action: any): Generator<any> {
  try {
    yield put(showLoader());
    const payload = yield call(getComments, action.payload.id);
    yield put({ type: FETCH_COMMENTS, payload });
    yield delay(1000);
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function getComments(id: number): Promise<IComment> {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return data;
}
