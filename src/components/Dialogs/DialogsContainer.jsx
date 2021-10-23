import React from "react";
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let newMessagesText = state.messagesPage.newMessagesText;

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text)
    props.store.dispatch(action);
  }

  let addMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action)
  }

  return (
    <Dialogs updateNewMessageText={onMessageChange} 
             addMessage={addMessage}
             newMessagesText={newMessagesText}
             dialogsData = {state.messagesPage.dialogsData}
             messagesData = {state.messagesPage.messagesData}/>
  );
};

export default DialogsContainer;
