import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import inputComponent from "../../components/forms/input";
import { updateUser } from "../../actions/index";

const validate = values => {
      let errors = {};
      if (
            !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
                  values.email
            )
      ) {
            errors.email = "email_match";
      }

      if (!values.email || values.email.trim() === "") {
            errors.email = "email_required";
      }
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
                                    name="email"
                                    type="email"
                                    label="email"
                                    component={inputComponent}
                              />
                              <Field
                                    name="name"
                                    type="text"
                                    label="name"
                                    component={inputComponent}
                              />
                              <Field
                                    name="bio"
                                    type="text"
                                    label="bio"
                                    component={inputComponent}
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
