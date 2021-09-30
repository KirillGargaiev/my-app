import React from "react";
import Dialog from "./Dialog/Dialog";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messageElement = props.messagesData.map((message) => (
    <Message text={message.message} />
  ));

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogsElements}</div>
      <div className={d.messages}>{messageElement}</div>
      <div><input ref={newMessageElement}/></div>
      <div><button onClick={()=>{let message=newMessageElement.current.value; alert(message)}}>Add message</button></div>
    </div>
  );
};

export default Dialogs;
