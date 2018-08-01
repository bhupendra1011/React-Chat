import { getMessages } from "../static-data";
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE
} from "../action/constants/action-types";

export default (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId, chatId } = action.payload;
      if (!userId) return state;
      const allUserMsg = state[userId];
      const number = chatId || +Object.keys(allUserMsg).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsg,
          [number]: {
            number,
            text: chatId ? message + "(edited)" : message,
            is_user_msg: false
          }
        }
      };

    case DELETE_MESSAGE:
      const { userId: user, messageNumber } = action.payload;
      const allUserMsgs = state[user];
      const filterMsg = delete allUserMsgs[messageNumber];
      return {
        ...state,
        [userId]: filterMsg
      };

    case UPDATE_MESSAGE:
      const {
        userId: userID,
        messageNumber: msgNumber,
        message: updateText
      } = action.payload;

      const allUserMsges = state[userID];
      const oldMessage = allUserMsges[msgNumber];
      return {
        ...state,
        [userID]: {
          ...allUserMsges,
          [msgNumber]: {
            ...oldMessage,
            text: updateText
          }
        }
      };
    default:
      return state;
  }
};
