import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let newPostText = state.profilePage.newPostText;

    let onPostChange = (text) => { 
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={newPostText}/>
    )
}

export default MyPostsContainer;