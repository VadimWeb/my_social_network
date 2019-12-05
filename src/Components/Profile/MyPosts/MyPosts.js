import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import Like from "./Post/Like/Like";

const MyPosts = () => {
    return (
        <div className={style.myposts}> My Posts
            <div> New Posts </div>
            <div>
                <textarea> </textarea>
                <button> Add post</button>
                <button> Remove</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?'/>
                <Like value ='10'/>
                <Post message="It's my first post"/>
                <Like value='12'/>
            </div>
        </div>
    );
}

export default MyPosts;