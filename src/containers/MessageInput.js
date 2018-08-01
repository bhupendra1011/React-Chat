import React from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../action";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const handleChange = e => {
    const action = setTypingValue(e.target.value);
    store.dispatch(action);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { activeUserId, typing, activeChatId } = store.getState();
    const action = sendMessage(activeUserId, typing, activeChatId);
    // const action  = updateMessage(activeUserId, ,typing)
    store.dispatch(action);
  };

  return (
    <form action="" className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        value={value}
        onChange={handleChange}
        placeholder="Enter Text ..."
      />
    </form>
  );
};

export default MessageInput;
