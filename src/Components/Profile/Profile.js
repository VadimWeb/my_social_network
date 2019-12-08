import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src="https://klike.net/uploads/posts/2019-01/1547365376_1.jpg" alt=""/>
            </div>
            <div><img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt=""/></div>
            <div> ava + descriotion </div>
          <MyPosts/>
        </div>
    );
}

export default Profile;