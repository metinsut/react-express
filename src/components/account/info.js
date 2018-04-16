import React from "react";
import { connect } from "react-redux";
import { Field, Fields, reduxForm } from "redux-form";
import { updateUser } from "../../actions/index";
import renderMultipleFields from "../forms/renderMultipleFields";
import renderDate from "../forms/renderDate";

const validate = values => {
    let errors = {};
    return errors;
};

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

class Info extends React.Component {
    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            account
        } = this.props;
        const date = new Date(account.joinDate);
        const label = {
            company: "Company",
            position: "Position",
            startYear: "Start Year",
            endYear: "End Year",
            stillWork: "Still Work"
        };
        return (
            <div className="profile__root">
                <div className="account__title">
                    <h1>YOUR PROFILE</h1>
                </div>

                <form onSubmit={handleSubmit(this.props.onSaveData)}>
                    <h1>{`Joined: ${date.getDay()} ${
                        monthNames[date.getMonth()]
                    } ${date.getFullYear()} ${
                        days[date.getDay()]
                    } ${date.getHours()}:${date.getMinutes()}`}</h1>
                    <br />
                    <Field
                        name="birthday"
                        type="date"
                        title="Birthday"
                        label="Birthday"
                        component={renderDate}
                    />
                    <Fields
                        label={label}
                        names={[
                            "company.name",
                            "company.position",
                            "company.startYear",
                            "company.endYear",
                            "company.stillWork"
                        ]}
                        component={renderMultipleFields}
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
        account: state.getUser
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

Info = connect(mapStateToProps, mapDispatchToProps)(Info);
export default reduxForm({ form: "account", validate })(Info);
