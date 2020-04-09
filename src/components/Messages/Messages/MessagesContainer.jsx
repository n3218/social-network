import React from 'react'
import Messages from './Messages';
import {addMessage} from '../../../redux/messages-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

class MessagesContainer extends React.Component {
    render() {
        return <Messages {...this.props} sendMessage={this.props.sendMessage} />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {dispatch(addMessage(newMessageBody))}
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer)