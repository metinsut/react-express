import React from "react";
import { connect } from "react-redux";
import ProfileForm from "./profileForm";
import { updateUser, getAccount } from "../../../actions/index";

class Profile extends React.Component {
    componentDidMount() {
        // this.props.initializeData(this.props.account);
        this.props.getAccount();
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.result !== this.props.result) {
            this.props.getAccount();
        }

        // if (
        //     Object.keys(prevProps.account).length === 0 &&
        //     Object.keys(this.props.account).length > 0
        // ) {
        //     this.props.initializeData(this.props.account);
        // }
    }

    render() {
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>
                <ProfileForm
                    account={this.props.account}
                    // initialValues={this.props.account}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.getUser ? state.getUser : null,
        result: state.formResult ? state.formResult : null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAccount: () => {
            dispatch(getAccount());
        },
        onSaveData: data => {
            const token = localStorage.getItem("userToken");
            dispatch(updateUser({ ...data, ...{ token: token } }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
