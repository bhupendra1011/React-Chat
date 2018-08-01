import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE
} from "./constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = text => ({
  type: SET_TYPING_VALUE,
  payload: text
});

export const sendMessage = (userId, message, chatId) => ({
  type: SEND_MESSAGE,
  payload: {
    userId,
    message,
    chatId
  }
});

export const deleteMessage = (userId, messageNumber) => ({
  type: DELETE_MESSAGE,
  payload: {
    userId,
    messageNumber
  }
});

export const updateMessage = (userId, messageNumber, message) => ({
  type: UPDATE_MESSAGE,
  payload: {
    userId,
    messageNumber,
    message
  }
});
