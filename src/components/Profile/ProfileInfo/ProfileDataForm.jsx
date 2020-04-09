import React from 'react';
import style from './ProfileInfo.module.css';
import { Input, CreateField, Textarea } from './../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>
      {error && 
        <div className={style.formSummaryError}>{error}</div>
      }
      <div>
        <div>
          <b>Full Name:</b> {CreateField('', 'fullName', [], Input)}
        </div>
        <div>
          <b>Looking For A Job</b>:
          {CreateField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
          <b>My professional skills:</b>:
          {CreateField('', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
          <b>About Me</b>: {CreateField('', 'aboutMe', [], Input)}
        </div>
      </div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
      return <div key={key} className={style.contact}>
        <b>{key}:</b> {CreateField('', 'contacts.' + key, [], Input)}
      </div>
      // <Contact title={key} key={key} value={profile.contacts[key]} />
    })}
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileDataForm' })(ProfileDataForm)


export default ProfileDataReduxForm;