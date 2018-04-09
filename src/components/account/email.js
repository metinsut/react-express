import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../components/forms/renderField";
import { updateUserEmail } from "../../actions/index";

const validate = values => {
    let errors = {};
    if (
        !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
            values.email
        )
    ) {
        errors.email = "Doğru bir email adresi giriniz.";
    }

    if (
        !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
            values.previousEmail
        )
    ) {
        errors.previousEmail = "Doğru bir email adresi giriniz.";
    }

    if (
        !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
            values.emailRepeat
        )
    ) {
        errors.emailRepeat = "Doğru bir email adresi giriniz.";
    }

    if (values.email !== values.emailRepeat) {
        errors.emailRepeat = "Email adresleriniz eşleşmiyor...";
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
                        name="previousEmail"
                        type="email"
                        label="Önceki E-mail adresiniz."
                        component={renderField}
                    />
                    <Field
                        name="email"
                        type="email"
                        label="Yeni E-mail adresiniz."
                        component={renderField}
                    />
                    <Field
                        name="emailRepeat"
                        type="email"
                        label="Yeni E-mail adresiniz tekrar."
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
        isLogin: state.statusLogin.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveData: data => {
            const token = localStorage.getItem("userToken");
            console.log({ ...{previousEmail:data.previousEmail},...{email:data.email}, ...{ token: token } });
            dispatch(updateUserEmail({ ...{previousEmail:data.previousEmail},...{email:data.email}, ...{ token: token } }));
        }
    };
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({ form: "account", validate })(Profile);
