import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize } from "redux-form";
import renderField from "../../components/forms/renderField";
import renderRadio from "../../components/forms/renderRadio";
import renderSwitch from "../../components/forms/renderSwitch";
import renderCheckbox from "../../components/forms/renderCheckbox";
import renderDate from "../forms/renderDate";
import { updateUser } from "../../actions/index";

const validate = values => {
      let errors = {};

      if (!values.name || values.name.trim() === "") {
            errors.name = "name_required";
      }

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

class Profile extends React.Component {
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
            const {
                  handleSubmit,
                  pristine,
                  reset,
                  submitting,
                  account
            } = this.props;
            const date = new Date(account.joinDate);
            return (
                  <div className="profile__root">
                        <div className="account__title">
                              <h1>YOUR PROFILE</h1>
                        </div>

                        <form onSubmit={handleSubmit(this.props.onSaveData)}>
                              <h1>{`Joined: ${date.getDate()} ${
                                    monthNames[date.getMonth()]
                              } ${date.getFullYear()} ${
                                    days[date.getDay()]
                              } ${date.getHours()}:${date.getMinutes()}`}</h1>
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
                                    name="gender"
                                    // required={true}
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
            },
            initializeData: data => {
                  dispatch(initialize("account", data));
            }
      };
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default reduxForm({
      form: "account",
      validate
})(Profile);
