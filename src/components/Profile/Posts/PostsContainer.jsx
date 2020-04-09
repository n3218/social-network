import React from 'react';
import Posts from './Posts';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


class PostsContainer extends React.Component {
  render() {
    return (
      <Posts {...this.props} addPost={this.props.addPost} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}


export default connect(mapStateToProps, { addPost })(PostsContainer);