import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <h3>Post title</h3>
      <div className={s.postBody}>
        <div className={s.avatarBlock}>
          <img src="https://avatarfiles.alphacoders.com/115/115265.png" className={s.avatar} alt="" />
          <div>likes: {props.likes}</div>
        </div>
        <div >
          {props.message}
        </div>
      </div>
      <div><span>like</span></div>
    </div>
  )
}


export default Post;