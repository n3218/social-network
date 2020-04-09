import React from 'react';
import s from './Messages.module.css';
import DialogsContainer from './Dialogs/DialogsContainer'
import MessagesContainer from './Messages/MessagesContainer'

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    )
}


export default Messages;