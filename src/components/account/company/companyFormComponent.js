import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import RenderCheckboxSelect from "../../forms/renderCheckboxSelect";
import RenderCheckbox from "../../forms/renderCheckbox";
import RenderField from "../../forms/renderField";

let CompanyComponent = props => {
      const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            stillWorkValue,
            onSaveData,
            onEditData,
            type
      } = props;
      return (
            <form
                  onSubmit={handleSubmit(
                        type === "edit" ? onEditData : onSaveData
                  )}
            >
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
                        {!stillWorkValue &&(
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
                        <Field
                              hidden={true}
                              name="id"
                              type="text"
                              label="id"
                              component={RenderField}
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
