import { UPDATE_MESSAGE, SEND_MESSAGE } from "../action/constants/action-types";

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return action.payload.messageNumber;
    case SEND_MESSAGE:
      return null;
    default:
      return state;
  }
};
