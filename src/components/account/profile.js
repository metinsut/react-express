import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../components/forms/renderField";
import renderRadio from "../../components/forms/renderRadio";
import renderSwitch from "../../components/forms/renderSwitch";
import renderCheckbox from "../../components/forms/renderCheckbox";
import { updateUser } from "../../actions/index";

const validate = values => {
    let errors = {};

    if (!values.name || values.name.trim() === "") {
        errors.name = "name_required";
    }

    return errors;
};

class Profile extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>

                <form onSubmit={handleSubmit(this.props.onSaveData)}>
                    <Field
                        name="name"
                        type="text"
                        label="Name"
                        component={renderField}
                    />
                    <Field
                        name="surName"
                        type="text"
                        label="Sur Name"
                        component={renderField}
                    />

                    <Field
                        name="gender"
                        // required={true}
                        options={[
                            { title: "Male", value: "male" },
                            { title: "Female", value: "female" }
                        ]}
                        component={renderRadio}
                    />

                    <Field
                        name="bio"
                        type="textarea"
                        label="bio"
                        component={renderField}
                    />
                    <Field
                        type="checkbox"
                        name="isActive"
                        label="User is Active ?"
                        component={renderSwitch}
                    />
                    <Field
                        type="checkbox"
                        name="isReadTerm"
                        label="Have you read rules ?"
                        component={renderCheckbox}
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

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({ form: "account", validate })(Profile);
