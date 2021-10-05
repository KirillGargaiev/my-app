import React from "react";
import Dialog from "./Dialog/Dialog";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../redux/dialogs-reducer";

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
      <div className={d.messages}>
        <div>{messageElement}</div>
        <div><input onChange={()=>{let text = newMessageElement.current.value; props.dispatch(updateNewMessageTextActionCreator(text));}} ref={newMessageElement} value={props.newMessagesText}/></div>
        <div><button onClick={()=>{props.dispatch(addMessageActionCreator())}}>Add message</button></div>
      </div>
      
    </div>
  );
};

export default Dialogs;
