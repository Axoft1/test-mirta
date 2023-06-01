import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcherPosts } from "./post-service/saga-post";
import { sagaWatcherComment } from "./comment-service/saga-comment";
import { sagaWatcherUser } from "./user-service/saga-user";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));
saga.run(sagaWatcherPosts);
saga.run(sagaWatcherComment);
saga.run(sagaWatcherUser);

export type RootState = ReturnType<typeof store.getState>;
export default store;
