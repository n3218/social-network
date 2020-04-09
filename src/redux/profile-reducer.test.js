import { React } from 'react';
import profileReducer, { addPost, deletePost } from './profile-reducer'

let state = {
  posts: [
    { id: 1, likesCount: 99, message: "Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!  " },
    { id: 2, likesCount: 52, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
    { id: 3, likesCount: 35, message: "Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
    { id: 4, likesCount: 15, message: "Tempore impedit ipsum laudantium ex sint est!" }
  ]
}

it('new post should be added', () => {
  // 1. data
  let action = addPost("it-kamasutra");

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(5);
})


it('new post message should be correct', () => {
  // 1. data
  let action = addPost("it-kamasutra");

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts[4].message).toBe('it-kamasutra');
})

it('after deleting posts array length should decrement', () => {
  // 1. data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(3);
})


