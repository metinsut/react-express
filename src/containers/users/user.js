import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/index";

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url) {
            this.props.getUser(this.props.match.params.id);
        }
    }

    render() {
        const user = this.props.user[0];
        return (
            <section>
                {user ? (
                    <React.Fragment>
                        <h1>{user.name}</h1>
                        <p>{user.bio}</p>
                    </React.Fragment>
                ) : null}
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.siteLang && state.siteLang.lang,
    site: state.siteLayout && state.siteLayout[state.siteLang.lang],
    user: state.getUser ? state.getUser : null
});

const mapDispatchToProps = dispatch => {
    return {
        getUser: id => {
            dispatch(getUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
