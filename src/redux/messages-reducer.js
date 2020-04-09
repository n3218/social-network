const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
  dialogs: [
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
  ]
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          { id: 5, message: action.newMessageBody },
          ...state.messages]
      }
    default:
      return state;
  }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })


export default messagesReducer;