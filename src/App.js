import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBarView from './views/AppBarView/AppBarView';
import Container from './Common/Container';
import routes from './routes';
import './App.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactsView from './views/ContactsView/ContactsView';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import LoginPage from './Components/LoginPage/LoginPage';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

import authOps from './redux/auth/auth-operations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBarView />

        <Suspense
          fallback={
            <div className="loader">
              <Loader type="ThreeDots" color="#4f5252" width={100} />
            </div>
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PublicRoute path={routes.register} restricted redirectTo={routes.home} component={RegisterPage} />
            <PublicRoute path={routes.login} restricted redirectTo={routes.contacts} component={LoginPage} />
            <PrivateRoute path={routes.contacts} redirectTo={routes.login} component={ContactsView} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOps.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
