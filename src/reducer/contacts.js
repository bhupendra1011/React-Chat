// setting default parameter & destructing in js
// now initial state of app is manged by reducer
import { contacts } from "../static-data";
export default (state = contacts, action) => {
  return state;
};
