import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderCheckboxGroup from "../../components/forms/renderCheckboxGroup";
import { updateUser } from "../../actions/index";

const validate = values => {
    let errors = {};

    return errors;
};

class InterestedIn extends React.Component {

      colors = ["Computer", "Music", "Sport", "Art", "Gaming", "Travel", "Cooking"];

      render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>

                <form onSubmit={handleSubmit(this.props.onSaveData)}>
                    <Field
                        name="interestedIn"
                        type="checkbox"
                        title="InterestedIn"
                        label="InterestedIn"
                        options={this.colors}
                        component={renderCheckboxGroup}
                    />
                    <div className="button__block">
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                        >
                            Clear Values
                        </button>
                        <button type="submit" disabled={submitting}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.getUser,
        isLogin: state.statusLogin.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveData: data => {
            const token = localStorage.getItem("userToken");
            dispatch(updateUser({ ...data, ...{ token: token } }));
        }
    };
};

InterestedIn = connect(mapStateToProps, mapDispatchToProps)(InterestedIn);
export default reduxForm({ form: "account", validate })(InterestedIn);
