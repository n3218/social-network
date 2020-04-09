import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalCount,
  requestUsers
} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import {
  getAllUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from './../../redux/users-selectors';
import { compose } from 'redux';


class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize, getUsers} = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
}


  render() {
    console.log("render USERS")
    
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  console.log("mapStateToProps USERS")
  
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {
      follow,
      unfollow,
      setCurrentPage,
      setTotalCount,
      getUsers: requestUsers
    }
  ))(UsersContainer)