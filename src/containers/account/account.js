import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getAccount } from "../../actions/index";
import Authentication from "../../components/authentication/authentication";
import Profile from "../../components/account/profile";
import Email from "../../components/account/email";
import Password from "../../components/account/password";
import Photo from "../../components/account/photo";
import InterestedIn from "../../components/account/interestedIn";
import Company from "../../components/account/company";
import AccountMenuContainer from "./accountMenu";
import * as R from "../../constants/routhPath";

class Account extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem("userToken");
        this.props.dispatch(getAccount(token));
    }

    render() {
        return (
            <Authentication
                history={this.props.history}
                isLogin={this.props.isLogin}
            >
                <section className="account__root">
                    <AccountMenuContainer />
                    <article className="account__content">
                        <Switch>
                            <Route exact path={R.ACCOUNT} component={Profile} />
                            <Route
                                path={R.ACCOUNT + R.PROFILE}
                                component={Profile}
                            />
                            <Route
                                path={R.ACCOUNT + R.EMAIL}
                                component={Email}
                            />
                            <Route
                                path={R.ACCOUNT + R.PASSWORD}
                                component={Password}
                            />
                            <Route
                                path={R.ACCOUNT + R.PHOTO}
                                component={Photo}
                            />
                            <Route
                                path={R.ACCOUNT + R.INTERESTED}
                                component={InterestedIn}
                            />
                            <Route
                                path={R.ACCOUNT + R.COMPANY}
                                component={Company}
                            />
                        </Switch>
                    </article>
                </section>
            </Authentication>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.getUser,
        isLogin: state.statusLogin.status
    };
};

export default connect(mapStateToProps)(Account);
