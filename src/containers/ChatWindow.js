import React from "react";
import "./ChatWindow.css";

import store from "../store";
import Header from "../components/Header";
import Chat from "../components/Chat";
import MessageInput from "./MessageInput";
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];
  const typing = state.typing;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(messages)} userId={activeUserId} />
      <MessageInput value={typing} />
    </div>
  );
};
export default ChatWindow;
