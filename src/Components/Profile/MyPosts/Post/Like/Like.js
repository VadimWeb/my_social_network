import React from 'react';
import style from './Like.module.css'

const Like = (props) => {
    return (
        <div className={style.like}>
            <span>Like  </span> {props.value}
        </div>

    );
}

export default Like;