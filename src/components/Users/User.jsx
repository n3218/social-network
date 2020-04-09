import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.avatarBlock}>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.avatar} alt={user.name} />
        </NavLink>
      </div>
      <div className={style.statusBlock}>
        <h3>{user.name} (id: {user.id})</h3>
        <div>{user.status}</div>
      </div>
      <div>
        {user.followed
          ? <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }} >
            Unollow
              </button>
          : <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => { follow(user.id) }} >
            Follow
              </button>
        }
      </div>
    </div>
  )
}

export default User;