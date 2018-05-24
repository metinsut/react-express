import React from "react";
import { connect } from "react-redux";
import ProfileForm from "./profileForm";
import { updateUser, getAccount } from "../../../actions/index";

class Profile extends React.Component {


    render() {
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>
                <ProfileForm
                    account={this.props.account}
                    form={"profile"}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.getAcc ? state.getAcc : null,
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
