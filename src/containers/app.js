import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as R from "../constants/routhPath";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/menu";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import Users from "./users/users";
import Login from "./auth/login";
import SignUp from "./auth/signUp";
import { getSiteData, getResult, loginStatus } from "../actions/index";

class App extends Component {
      componentDidMount() {
            this.props.dispatch(getSiteData());
            this.props.dispatch(getResult());
            this.props.dispatch(
                  loginStatus(
                        localStorage.userToken
                              ? { status: true, token: localStorage.userToken }
                              : { status: false }
                  )
            );
      }

      render() {
            return (
                  <main>
                        <Header />
                        <Menu />
                        <Switch>
                              <Route exact path={R.ROOT} component={Home} />
                              <Route path={R.HOME} component={Home} />
                              <Route path={R.ABOUT} component={About} />
                              <Route path={R.CONTACT} component={Contact} />
                              <Route path={R.USERS} component={Users} />
                        </Switch>

                        <Route path={R.ALLPAGES + R.LOGIN} component={Login} />
                        <Route
                              path={R.ALLPAGES + R.SINGUP}
                              component={SignUp}
                        />
                        <Footer />
                  </main>
            );
      }
}

export default withRouter(connect()(App));
