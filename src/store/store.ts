import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));
saga.run(sagaWatcher);

export type RootState = ReturnType<typeof store.getState>;
export default  store 