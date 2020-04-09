import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import store from './redux/redux-store';

import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/app-reducer';
import './App.css';
import { withSuspense } from './hoc/withSuspense';

const Messages = React.lazy(() => import('./components/Messages/Messages'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/messages" render={withSuspense(Messages)} />

          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;