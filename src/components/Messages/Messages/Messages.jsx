import React from 'react';
import { Field, reduxForm } from 'redux-form'
import s from './Messages.module.css';
import { MaxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const Messages = (props) => {
    let messagesList = props.messages.map((m, i) => {
        return (
            <div className={s.messageBlock} key={i}>
                <span className={s.message}>{m.message}</span>
            </div>
        )
    })

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    
    return (
        <div className={s.messages}>
            <h2>New Message</h2>
            <AddMessageReduxForm onSubmit={addNewMessage} />
            <h2>Dialogs</h2>
            {messagesList}
        </div>
    )
}

const maxLength50 = MaxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field
                component={Textarea}
                validate={[required , maxLength50 ]}    
                name="newMessageBody" 
                placeholder="Enter your message" />
            <button>Submit</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm)


export default Messages;