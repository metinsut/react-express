import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderFile from "../../components/forms/renderFile";

const validate = values => {
    let errors = {};

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
                        name="file"
                        type="file"
                        label="File"
                        component={renderFile}
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
        }
    };
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({ form: "account", validate })(Profile);
