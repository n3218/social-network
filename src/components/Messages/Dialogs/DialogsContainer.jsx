import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';


class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({ 
    dialogs: state.messagesPage.dialogs
})


export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsContainer)

