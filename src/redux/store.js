import dialogsReducer from './messages-reducer'
import profileReducer from './profile-reducer'

let store = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Masha' },
        { id: 6, name: 'Vova' },
        { id: 7, name: 'Olya' }
      ],
      messages: [
        { id: 1, message: 'Yo' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Foo' },
        { id: 4, message: 'Ua' },
        { id: 5, message: 'Hello' },
        { id: 6, message: 'Si' },
        { id: 7, message: 'Be' }
      ],
      newMessageText: 'Your message'
    },
    profilePage: {
      posts: [
        { id: 1, likesCount: 5, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!  " },
        { id: 1, likesCount: 52, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
        { id: 1, likesCount: 35, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" },
        { id: 1, likesCount: 15, message: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque nostrum dolores quaerat repudiandae, laboriosam rerum odio earum? Harum repellat voluptates nisi nihil architecto ipsam sunt provident accusamus distinctio expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cum, aliquid quisquam perferendis ratione nostrum excepturi deleniti, exercitationem fugit voluptas aliquam ad ex. Tempore impedit ipsum laudantium ex sint est!" }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State was changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) { 
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;