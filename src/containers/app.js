import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import Home from "./home";
import { getSiteData } from "../actions/index";
import {connect} from "react-redux";

class App extends Component {
      componentDidMount() {
            this.props.dispatch(getSiteData());
      }

      render() {
            return (
                  <main>
                        <Header />
                        <Switch>
                              <Route path="/" component={Home} />
                        </Switch>
                        <Footer />
                  </main>
            );
      }
}


export default connect()(App);
