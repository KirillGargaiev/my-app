import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postElement = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let body = newPostElement.current.value;
        props.updateNewPostText(body)
    }

    return (
        <div className={p.postBlock}>
            <h3>My posts</h3>
            <div>
                <input onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div className={p.postButton}>
                    <button onClick={onAddPost}>Добавить пост</button>
                </div>
            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts