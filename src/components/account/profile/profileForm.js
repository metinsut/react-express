import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import renderField from "../../../components/forms/renderField";
import renderRadio from "../../../components/forms/renderRadio";
import renderSwitch from "../../../components/forms/renderSwitch";
import renderCheckbox from "../../../components/forms/renderCheckbox";
import renderDate from "../../forms/renderDate";
import helper from "../../../helper/helper";
import { updateUser } from "../../../actions/index";

const validate = values => {
    let errors = {};
    if (!values.name || values.name.trim() === "") {
        errors.name = "name_required";
    }
    return errors;
};

class ProfileForm extends React.Component {
    componentDidMount() {
        this.props.initializeData(this.props.account);
    }

    componentDidUpdate(prevProps) {
        if (
            Object.keys(prevProps.account).length === 0 &&
            Object.keys(this.props.account).length > 0
        ) {
            this.props.initializeData(this.props.account);
        }
    }

    render() {
        let account = this.props.account;
        const date = new Date(account ? account.joinDate : null);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.onSaveData)}>
                {date ? (
                    <h1>{`Joined: ${date.getDate()} ${
                        helper.monthNames[date.getMonth()]
                    } ${date.getFullYear()} ${
                        helper.days[date.getDay()]
                    } ${date.getHours()}:${date.getMinutes()}`}</h1>
                ) : (
                    <div />
                )}

                <br />

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
                    name="link"
                    type="text"
                    label="URL"
                    component={renderField}
                />

                <Field
                    name="gender"
                    options={[
                        { title: "Male", value: "male" },
                        { title: "Female", value: "female" }
                    ]}
                    component={renderRadio}
                />

                <Field
                    name="birthday"
                    type="date"
                    title="Birthday"
                    label="Birthday"
                    component={renderDate}
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
                    options={{
                        first: "Read",
                        second: "UnRead"
                    }}
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
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveData: data => {
            const token = localStorage.getItem("userToken");
            dispatch(updateUser({ ...data, ...{ token: token } }));
        },
        initializeData: data => {
            dispatch(initialize("profile", data));
        }
    };
};

ProfileForm = connect(null, mapDispatchToProps)(ProfileForm);

export default reduxForm({
    form: "profile",
    validate
})(ProfileForm);
