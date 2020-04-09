import { usersAPI, profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PROFILE = 'SAVE_PROFILE';


let initialState = {
  posts: [
    { id: 1, likesCount: 99, message: "Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!  " },
    { id: 2, likesCount: 52, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
    { id: 3, likesCount: 35, message: "Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
    { id: 4, likesCount: 15, message: "Tempore impedit ipsum laudantium ex sint est!" }
  ],
  profile: null,
  status: '',
  isOwner: false
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likesCount: 0,
        message: action.postBody
      }

      return {
        profile: state.profile,
        status: state.status,
        posts: [...state.posts, newPost]
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case GET_STATUS:
      return { ...state, status: action.status }
    case SET_STATUS:
      return { ...state, status: action.status }
    case UPDATE_STATUS:
      return { ...state, status: action.status }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case SAVE_PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state;
  }
}

export const addPost = (postBody) => ({ type: ADD_POST, postBody })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  
  if(response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('profileDataForm', { _error: response.data.messages[0] }));
  }
}

export default profileReducer;