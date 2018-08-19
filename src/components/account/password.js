import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../components/forms/renderField";
import { updateUserPassword } from "../../actions/index";

const validate = values => {
    let errors = {};

    //     if (Object.keys(values.password)[0].lenght <= 5) {
    //         errors.password = "Password lenght must be bigger than five.";
    //     }

    if (values.password !== values.passwordRepeat) {
        errors.passwordRepeat = "Şifreniz eşleşmiyor...";
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
                        name="previousPassword"
                        type="password"
                        label="Önceki Password adresiniz."
                        component={renderField}
                    />
                    <Field
                        name="password"
                        type="password"
                        label="Yeni Password adresiniz."
                        component={renderField}
                    />
                    <Field
                        name="passwordRepeat"
                        type="password"
                        label="Yeni Password adresiniz tekrar."
                        component={renderField}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveData: data => {
            dispatch(
                updateUserPassword({
                    ...{ previousPassword: data.previousPassword },
                    ...{ password: data.password }
                })
            );
        }
    };
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({ form: "account", validate })(Profile);
