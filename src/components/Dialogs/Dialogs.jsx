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

  let onNewMessageChange = () => {
    let body = newMessageElement.current.value;
    props.updateNewMessageBody(body)
  }

  let addMessage = () => {
    props.addMessage()
  }

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogsElements}</div>
      <div className={d.messages}>
        <div>{messageElement}</div>
        <div><input onChange={onNewMessageChange} ref={newMessageElement} value={props.newMessagesText}/></div>
        <div><button onClick={addMessage}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
