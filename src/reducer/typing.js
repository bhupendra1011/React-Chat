import {
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  UPDATE_MESSAGE
} from "../action/constants/action-types";

export default (state = "", action) => {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case UPDATE_MESSAGE:
      return action.payload.message;
    default:
      return state;
  }
};
