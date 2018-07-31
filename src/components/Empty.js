import React from "react";
import "./Empty.css";

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const fName = name.split(" ")[0];
  return (
    <div className="Empty">
      <h1 className="Empty__name"> Welcome ,{fName} </h1>
      <img src={profile_pic} alt={name} className="User__pic" />
      <p className="Empty__status">
        <b>Status:</b>
        {status}
      </p>
      <button className="Empty__btn">Start a Conversation</button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;
