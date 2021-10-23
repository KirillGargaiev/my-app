import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
    
                {id:1, message: "Hello", likesCount: 33 },
                {id:2, message: "I am css", likesCount: 1241 }
            ],
            newPostText: "",
        },
        messagesPage: {
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
            newMessagesText:""
        },
        newsPage: {
    
        },
        musicPage: {
    
        },
        settingsPage: {
    
        },
        sidebar: {
            
        }
    
    },
    _callSubscriber(){
        console.log("State changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state)
    } 
}

export default store;