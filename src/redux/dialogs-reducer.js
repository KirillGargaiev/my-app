const MessageProcess = {
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT'
}

//all fields must be initializing as null ([], '', 0, null)
let initialState = {
    dialogsData: [
        { name: "Kostya", id: 1 },
        { name: "Kostik", id: 2 },
        { name: "Anton", id: 3 },
        { name: "Oleg", id: 4 },
        { name: "Nika", id: 5 },
    ],
    messagesData: [
        { message: "Ladno", id: 1 },
        { message: "Hello", id: 2 },
        { message: "What's up?", id: 3 },
        { message: "What's up?", id: 4 },
        { message: "What's up?", id: 5 },
    ],
    newMessagesText:"", // use single quote
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.messageText;
            return state;
        case ADD_MESSAGE:
            let newMessage = { // newMessage not reinitialization in code, replace on const
                id: state.messagesData.length+1,
                message: state.newMessagesText,
            };
            state.messagesData.push(newMessage);
            state.newMessagesText="";
            return state;

        default: return state;
    }
}    

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,messageText: text})

export default dialogsReducer;
