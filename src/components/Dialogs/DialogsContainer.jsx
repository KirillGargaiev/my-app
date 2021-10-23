import React from "react";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let newMessagesText = state.messagesPage.newMessagesText;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body));
  }

  return (
    <Dialogs updateNewMessageBody = {onMessageChange} 
             addMessage={addMessage}
             newMessagesText={newMessagesText}
             dialogsData = {state.messagesPage.dialogsData}
             messagesData = {state.messagesPage.messagesData}
             dialogsPage = {state.messagesPage}/>
  );
};

export default DialogsContainer;
