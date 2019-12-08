import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>Алинка</div>
                <div className={style.dialog + ' ' + style.active}>Егор</div>
                <div className={style.dialog + ' ' + style.active}>Евгений</div>
                <div className={style.dialog + ' ' + style.active}>Елена</div>
                <div className={style.dialog + ' ' + style.active}>Ренат</div>
                <div className={style.dialog + ' ' + style.active}>Варвара</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How is your it-kamasutra?</div>
                <div className={style.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;