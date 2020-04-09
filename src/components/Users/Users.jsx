import React from 'react';
import Paginator from './../common/Paginator';
import User from './User';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

  return (
    <div>
      <h2>Users</h2>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize} 
        portionSize={20} />
      <div>

        {users.map(u =>
          <User user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow} />
        )}
      </div>
    </div>
  )
}

export default Users;