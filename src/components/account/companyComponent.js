import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, initialize, formValueSelector } from "redux-form";
import { updateCompany } from "../../actions/index";
import RenderCheckboxSelect from "../forms/renderCheckboxSelect";
import RenderCheckbox from "../forms/renderCheckbox";
import RenderField from "../forms/renderField";

let CompanyComponent = props => {
      const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            stillWorkValue
      } = props;
      return (
            <div className="profile__root">
                  <div className="account__title">
                        <h1>YOUR PROFILE</h1>
                  </div>
                  <form onSubmit={handleSubmit(props.onSaveData)}>
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

                              {stillWorkValue === false && (
                                    <Field
                                          name="endYear"
                                          label="End Year"
                                          component={RenderCheckboxSelect}
                                    />
                              )}

                              <Field
                                    name="stillWork"
                                    label="Still Work"
                                    options={{
                                          first: "Still Work",
                                          second: ""
                                    }}
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
};

CompanyComponent = reduxForm({
      form: "company"
})(CompanyComponent);

const selector = formValueSelector("company");

CompanyComponent = connect(state => {
      let stillWorkValue = selector(state, "stillWork");
      return {
            stillWorkValue
      };
})(CompanyComponent);

export default CompanyComponent;
