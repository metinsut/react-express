import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../components/forms/renderField";

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
                                    component={renderField}
                              />
                              <Field
                                    name="name"
                                    type="text"
                                    label="name"
                                    component={renderField}
                              />
                              <Field
                                    name="bio"
                                    type="text"
                                    label="bio"
                                    component={renderField}
                              />
                              <button
                                    type="button"
                                    disabled={pristine || submitting}
                                    onClick={reset}
                              >
                                    Clear Values
                              </button>
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
                  console.log(data);
            }
      };
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default reduxForm({ form: "account", validate })(Profile);
