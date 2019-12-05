import React from 'react';
import style from './Post.module.css'


const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.item}>
                <img
                    src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0='/>
                {props.message}
            </div>
        </div>
    );
}

export default Post;