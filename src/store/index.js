// global store
import { createStore } from "redux";
import reducer from "../reducer";

//import { contacts } from "../static-data";

// setting initial state like below is used for server side rendering
/*
const store = createStore(
  reducer,
  { contacts },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
