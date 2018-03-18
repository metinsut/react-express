import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { USER, USERS } from "../../constants/routhPath";
import User from "../users/user";

class Home extends Component {
      render() {
            return (
                  <section className="users">
                        <article>
                              <Link to={USERS + "/" + 1}>USER 1</Link>
                              <Link to={USERS + "/" + 2}>USER 2</Link>
                              <Link to={USERS + "/" + 3}>USER 3</Link>
                        </article>
                        <Route path={USER} component={User}/>
                  </section>
            );
      }
}

const mapStateToProps = (state, ownProps) => ({
      lang: state.siteLang && state.siteLang.lang,
      site: state.siteLayout && state.siteLayout[state.siteLang.lang]
});

export default connect(mapStateToProps)(Home);
