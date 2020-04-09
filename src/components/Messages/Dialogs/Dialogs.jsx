import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let DialogsList = props.dialogs.map((d,i) => {
        return (
            <div className={s.dialog} key={i}>
                <img className={s.avatar} alt="" src="https://cdn3.vectorstock.com/i/1000x1000/16/87/man-character-face-avatar-portrait-vector-15281687.jpg" />
                <NavLink to={'/messages/' + d.id} key={d.id}>{d.name}</NavLink>
            </div>
        )
    })

    return (
        <div className={s.dialogItems}>
            {DialogsList}
        </div>
    )
}


export default Dialogs;