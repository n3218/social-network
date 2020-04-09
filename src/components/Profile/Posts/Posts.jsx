import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import s from './Posts.module.css';
import { required, MaxLengthCreator } from './../../../utils/validators/validators'
import { Textarea } from './../../common/FormsControls/FormsControls'

let MaxLength10 = MaxLengthCreator(10)

let PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <Field
        component={Textarea}
        name="postBody"
        placeholder="Place your post here"
        validate={[required, MaxLength10]}
      />
      <button>Submit</button>
    </form>
  )
}

const PostFormRedux = reduxForm({ form: 'postForm' })(PostForm)


const Posts = React.memo(props => {

    let postsList =
      [...props.posts]
        .reverse()
        .map(p => <Post id={p.id} key={p.id} likes={p.likesCount} message={p.message} />)

    let addPost = (values) => {
      return props.addPost(values.postBody)
    }
    return (
      <div className={s.contentBlock}>
        <h2>New post</h2>
        <PostFormRedux onSubmit={addPost} />

        <h2>My posts:</h2>
        {postsList}
      </div>
    )

})


export default Posts;