const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
    
    {id:1, message: "Hello", likesCount: 33 },
    {id:2, message: "I am css", likesCount: 1241 }
],
newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText="";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newChangedText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newChangedText: text})

export default profileReducer;