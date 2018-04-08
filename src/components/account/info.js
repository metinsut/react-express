import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../components/forms/renderField";
import { updateUser } from "../../actions/index";

const validate = values => {
      let errors = {};

      if (!values.email || values.email.trim() === "") {
            errors.email = "email_required";
      }
      if (!values.name || values.name.trim() === "") {
            errors.name = "name_required";
      }

      return errors;
};

class Info extends React.Component {
      render() {
            const { handleSubmit, pristine, reset, submitting } = this.props;
            return (
                  <div className="profile__root">
                        <div className="account__title">
                              <h1>YOUR PROFILE</h1>
                        </div>

                        <form onSubmit={handleSubmit(this.props.onSaveData)}>
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

Info = connect(mapStateToProps, mapDispatchToProps)(Info);
export default reduxForm({ form: "account", validate })(Info);
