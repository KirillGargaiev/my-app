import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {



    let postElement = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)

    return (
        <div className={p.postBlock}>
            <h3>My posts</h3>
            <div>
                <input/>
                <div className={p.postButton}>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div className={p.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts