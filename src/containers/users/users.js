import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { USER, USERS } from "../../constants/routhPath";
import User from "../users/user";
import { getUsers } from "../../actions/index";

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        let users = this.props.users;
        return (
            <section className="users">
                <article>
                    {users
                        ? Object.keys(users).map((key, index) => {
                              return (
                                  <Link
                                      key={key}
                                      to={
                                          USERS +
                                          "/" +
                                          encodeURIComponent(
                                              users[key].link
                                                  .toLowerCase()
                                                  .trim()
                                          )
                                      }
                                  >
                                      {users[key].name}
                                  </Link>
                              );
                          })
                        : null}
                </article>
                <Route path={USER} Component={User} />
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.siteLang && state.siteLang.lang,
    site: state.siteLayout && state.siteLayout[state.siteLang.lang],
    users: state.getUsers && state.getUsers
});

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
