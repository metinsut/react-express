import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as R from '../constants/routhPath';
import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
import Menu from '../components/menu/menu';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Users from './users/users';
import Login from './auth/login';
import SignUp from './auth/signUp';
import Account from './account/account';
import NoMatch from '../components/noMatch/noMatch';
import ScrollToTopComponent from '../components/scrollTo/scrollToTopComponent';
import { getSiteData, getResult, statusLogin } from '../actions/index';
import Persons from '../containers/persons/person';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getSiteData());
    this.props.dispatch(getResult());
    this.props.dispatch(
      statusLogin(
        localStorage.userToken
          ? {
            status: true,
            token: localStorage.userToken,
            name: localStorage.userName
          }
          : { status: false }
      )
    );
  }

  render() {
    return (
      <ScrollToTopComponent>
        <Header />
        <Menu />
        <main>
          <Switch>
            <Route exact path={R.ROOT} component={Home} />
            <Route path={R.HOME} component={Home} />
            <Route path={R.ABOUT} component={About} />
            <Route path={R.CONTACT} component={Contact} />
            <Route path={R.USERS} component={Users} />
            <Route path={R.ACCOUNT} component={Account} />
            <Route path={R.PERSONS} component={Persons} />
            <Route component={NoMatch} />
          </Switch>
          <Route path={R.ALLPAGES + R.LOGIN} component={Login} />
          <Route
            path={R.ALLPAGES + R.SINGUP}
            component={SignUp}
          />
        </main>
        {/* <Footer /> */}
      </ScrollToTopComponent>
    );
  }
}

export default withRouter(connect()(App));
