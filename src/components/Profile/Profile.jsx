import React from "react";
import MyPosts from "./My posts/MyPosts";
import MyPostsContainer from "./My posts/MyPostsContainer";
import profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile