import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import p from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElement = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);

    return (
        <div className={p.postBlock}>
            <h3>My posts</h3>
            <div>
                <input onChange={()=>{let text = newPostElement.current.value; props.dispatch(updateNewPostTextActionCreator(text));}}ref={newPostElement} value={props.newPostText}/>
                <div className={p.postButton}>
                    <button onClick={()=>{props.dispatch(addPostActionCreator());}}>Добавить пост</button>
                </div>
            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts