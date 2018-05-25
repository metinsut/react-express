import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { USER, USERS } from "../../constants/routhPath";
import User from "../users/user";
import { getUsers } from "../../actions/index";
import UsersInfo from "./usersInfo";

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
                <article>
                    <Switch>
                        <Route exact path={USERS} component={UsersInfo} />
                        <Route exact path={USER} component={User} />
                    </Switch>
                </article>
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
