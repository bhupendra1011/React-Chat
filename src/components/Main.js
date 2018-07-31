import React from "react";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const mainComponent = () => {
    if (activeUserId == null) {
      return <Empty user={user} activeUserId={activeUserId} />;
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };
  return <main className="Main"> {mainComponent()} </main>;
};

export default Main;
