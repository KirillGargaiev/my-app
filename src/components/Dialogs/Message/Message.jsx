import React from "react";
import d from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={d.message}>
      {props.text}
    </div>
  );
};

export default Message;
