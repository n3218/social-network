import React from 'react';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, saveProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  render() {
    // console.log("Render Profile")
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId} />
    )
  }
}

let mapStateToProps = (state) => {
  // console.log("Profile mapStateToProps")
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  })
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, saveProfile }),
  withRouter
)(ProfileContainer)