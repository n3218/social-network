import React, { useState } from 'react';
import style from './ProfileInfo.module.css';


const Contact = ({ title, value }) => {
  return <div className={style.contact}><b>{title}</b>: {value}</div>
}

const ProfileData = ({ profile, isOwner, enableEditMode }) => {
  return <div>
    {isOwner && <button onClick={enableEditMode}>Edit</button>}
    <div><b>about Me</b>: {profile.aboutMe}</div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact title={key} key={key} value={profile.contacts[key]} />
      })}
    </div>
    <hr />
    <div><b>looking For A Job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
    {profile.lookingForAJob &&
      <div><b>looking For A Job Description</b>: {profile.lookingForAJobDescription}</div>
    }
    <hr />
  </div>
}

export default ProfileData;