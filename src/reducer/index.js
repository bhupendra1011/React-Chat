// root reducer
// reducer composition : message reducer , contacts reducer , typing reducer, activeuser reducer,user reducer
// individual redcuers will not manage entire state but only state relevant to them
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing
});
