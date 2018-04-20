import React from "react";
import { connect } from "react-redux";
import { Field, Fields, reduxForm, initialize, FieldArray } from "redux-form";
import { updateUser, newUserCompany } from "../../actions/index";
import RenderCheckboxSelect from "../forms/renderCheckboxSelect";
import RenderCheckbox from "../forms/renderCheckbox";
import RenderField from "../forms/renderField";

const validate = values => {
    let errors = {};
    return errors;
};

class Company extends React.Component {
    componentDidMount() {
        // this.props.initializeData(this.props.account);
    }

    componentDidUpdate(prevProps) {
        if (
            Object.keys(prevProps.account).length === 0 &&
            Object.keys(this.props.account).length > 0
        ) {
            // let initializeData = this.props.account;
            // initializeData.company=this.props.account.company[0];
            // this.props.initializeData(this.props.account);
        }
    }

    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            account
        } = this.props;
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
                    <div className="multiple__input__root">
                        <Field
                            name="name"
                            type="text"
                            label="Company"
                            component={RenderField}
                        />
                        <Field
                            name="position"
                            type="text"
                            label="Position"
                            component={RenderField}
                        />
                        <Field
                            name="startYear"
                            label="Start Year"
                            component={RenderCheckboxSelect}
                        />
                        {/* {(stillWork.input.value === "" || */}
                            {/* stillWork.input.value === false) && ( */}
                            <Field
                                name="endYear"
                                label="End Year"
                                component={RenderCheckboxSelect}
                            />
                        {/* )} */}
                        <Field
                            name="stillWork"
                            label="Still Work"
                            options={{ first: "Still Work", second: "" }}
                            component={RenderCheckbox}
                        />
                        
                    </div>
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
                <div />
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
            console.log(data);
            const token = localStorage.getItem("userToken");
            // dispatch(updateUser({ ...data, ...{ token: token } }));
            dispatch(newUserCompany({ ...{company:[data,data]}, ...{ token: token } }));
        }
        // initializeData: data => {
        //     dispatch(initialize("account", data));
        // }
    };
};

Company = connect(mapStateToProps, mapDispatchToProps)(Company);
export default reduxForm({ form: "account", validate })(Company);
