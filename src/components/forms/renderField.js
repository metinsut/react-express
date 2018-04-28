import React from "react";
import RenderInput from "./renderInput";

class RenderField extends React.Component {
      render() {
            const {
                  input,
                  label,
                  type,
                  meta: { touched, error },
                  hidden
            } = this.props;
            return (
                  <div
                        style={hidden === true ? {display:"none"}: null}
                        className="input__item"
                  >
                        <RenderInput type={type} input={input} />
                        <label className={touched && error ? "error" : ""}>
                              {label}
                        </label>
                        <span className={touched && error ? "error" : ""} />
                        <p className={error && touched ? "open" : ""}>
                              {error}
                        </p>
                  </div>
            );
      }
}

export default RenderField;
