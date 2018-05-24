import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../actions/index";

class User extends Component {
    componentDidMount() {
        console.log(this.props.match);
        console.log("ads");
        this.props.getUser(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps) this.props.getUser(this.props.match.params.id);
    }

    render() {
        const user = this.props.user;
        console.log(user);
        return (
            <section>
                <h1>{user.name}</h1>
                <h1>ASD</h1>
                <p>{user.bio}</p>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.siteLang && state.siteLang.lang,
    site: state.siteLayout && state.siteLayout[state.siteLang.lang],
    user: state.getUser && state.getUser
});

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch(getUser());
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
