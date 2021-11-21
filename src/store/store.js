import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { postsReducer } from "../reducers/postsReducer";
import { searchReducer } from "../reducers/searchReducer";

const reducers = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  search: searchReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);