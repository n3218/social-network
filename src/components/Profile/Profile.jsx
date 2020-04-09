import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div >
      <ProfileInfo  profile={props.profile} 
                    status={props.status} 
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    saveProfile={props.saveProfile} />
                    {/* savePhoto */}
      <PostsContainer profile={props.profile} />
    </div>
  )
}

export default Profile;