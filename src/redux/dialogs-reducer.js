const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length+1,
                message: state.newMessagesText,
            };
            state.messagesData.push(newMessage);
            state.newMessagesText="";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.messageText;
            return state;
        default: return state;
    }
}    

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: text
    }
}

export default dialogsReducer;