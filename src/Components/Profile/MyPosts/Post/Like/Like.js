import React from 'react';
import style from './Like.module.css'

const Like = (props) => {
    return (
        <div className={style.like}>
            <span>{props.value}</span>
        </div>

    );
}

export default Like;