import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom'


const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink></div>
            <div><NavLink to="/messages" className={s.item} activeClassName={s.activeLink}>Messages</NavLink></div>
            <div><NavLink to="/users" className={s.item} activeClassName={s.activeLink}>Users</NavLink></div>
            <div><NavLink to="/news" className={s.item} activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink to="/music" className={s.item} activeClassName={s.activeLink}>Music</NavLink></div>
            <div><NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    )
}


export default Nav;