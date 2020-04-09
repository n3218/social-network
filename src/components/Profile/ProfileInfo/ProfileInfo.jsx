import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import StatusWithHooks from './StatusWithHooks';
import userPhoto from './../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) return <Preloader />

  const mainPhotoChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData);
    // setEditMode(false);
  }

  return (
    <div className={style.avatarBlock}>
      <blockquote>
        <StatusWithHooks status={status} updateStatus={updateStatus} />
      </blockquote>
      <img src={profile.photos.large || userPhoto} alt="{profile.fullName}" className={style.mainPhoto} />
      {isOwner && <input type="file" onChange={mainPhotoChange} />}

      {editMode
        ? <ProfileDataForm initialValues={profile}  
                            profile={profile}
                            onSubmit={onSubmit} />
        : <ProfileData  enableEditMode={() => setEditMode(true)}
                        profile={profile}
                        isOwner={isOwner} />}
    </div>
  )
}


export default ProfileInfo;