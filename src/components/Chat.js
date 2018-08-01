import React from "react";
import "./Chat.css";
import { deleteMessage, updateMessage } from "../action";
import store from "../store";

const Chat = props => {
  const { msg, userId } = props;
  const { is_user_msg, text, number } = msg;
  const handleDelete = e => {
    // call action to delete msg
    e.stopPropagation();
    const action = deleteMessage(userId, number);
    store.dispatch(action);
    // dispatch action
  };
  const handleUpdate = e => {
    if (is_user_msg === false) {
      const action = updateMessage(userId, number, text);
      store.dispatch(action);
    }
  };
  return (
    <div
      className={`Chat ${!is_user_msg ? "is-user-msg" : ""}`}
      onClick={handleUpdate}
    >
      {" "}
      {text}
      {!is_user_msg ? (
        <span className="Chat__del_msg" onClick={handleDelete}>
          {" "}
          X{" "}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.chatRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
  };
  render() {
    return (
      <div className="Chats" ref={this.chatRef}>
        {this.props.messages.map(msg => (
          <Chat msg={msg} key={msg.number} userId={this.props.userId} />
        ))}
      </div>
    );
  }
}

export default Chats;
