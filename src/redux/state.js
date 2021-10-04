const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
    
                {id:1, message: "Hello", likesCount: 33 },
                {id:2, message: "I am css", likesCount: 1241 }
            ],
            newPostText: " ",
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
            ]
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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText="";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        }
    }
    
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;