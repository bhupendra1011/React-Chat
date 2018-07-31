import React from "react";
import "./User.css";
import { setActiveUserId } from "../action";
import store from "../store";

const handleClick = userId => {
  const action = setActiveUserId(userId);
  store.dispatch(action);
};

const User = ({ user }) => {
  const { name, profile_pic, status, user_id } = user;
  return (
    <div className="User" onClick={handleClick.bind(null, user_id)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
