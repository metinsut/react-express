import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import renderCheckboxGroup from "../../components/forms/renderCheckboxGroup";
import { updateUser, getAccount } from "../../actions/index";

const validate = values => {
    let errors = {};

    return errors;
};

class InterestedIn extends React.Component {
    componentDidMount() {
        this.props.initializeData(this.props.account);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.result !== this.props.result) {
            this.props.getAccount();
        }

        if (
            Object.keys(prevProps.account).length === 0 &&
            Object.keys(this.props.account).length > 0
        ) {
            this.props.initializeData(this.props.account);
        }
    }

    colors = [
        "Computer",
        "Music",
        "Sport",
        "Art",
        "Gaming",
        "Travel",
        "Cooking"
    ];

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        let interestedIn = this.props.account.interestedIn;
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>

                <form onSubmit={handleSubmit(this.props.onSaveData)}>
                    <div className="InterestedIn">
                        {interestedIn &&
                            interestedIn.map((item, key) => (
                                <p key={key}>{item}</p>
                            ))}
                    </div>

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
        account: state.getAcc ? state.getAcc : null,
        result: state.formResult
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAccount: () => {
            dispatch(getAccount());
        },
        onSaveData: data => {
            dispatch(updateUser(data));
        },
        initializeData: data => {
            dispatch(initialize("interestedIn", data));
        }
    };
};

InterestedIn = connect(mapStateToProps, mapDispatchToProps)(InterestedIn);
export default reduxForm({ form: "interestedIn", validate })(InterestedIn);
