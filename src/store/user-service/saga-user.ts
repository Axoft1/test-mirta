import axios from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader } from "./actions";
import { REQUEST_USER, FETCH_USER } from "../types";
import { IUser } from "../../components/types";

export function* sagaWatcherUser() {
  yield takeEvery(REQUEST_USER, sagaWorker);
}

function* sagaWorker(action: any): Generator<any> {
  try {
    yield put(showLoader());
    const payloadUser = yield call(getUser, action.payload.id);
    const payloadUserPosts = yield call(getUserPost, action.payload.id);
    yield put({ type: FETCH_USER,payload:{payloadUser, payloadUserPosts}});
    yield delay(1000);
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
  }
}

async function getUser(id: number): Promise<IUser> {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
}
async function getUserPost(id: number): Promise<any> {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return data;
}
