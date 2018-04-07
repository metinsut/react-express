import React from "react";

class renderInputField extends React.Component {
   render() {
      const { input, label, type, meta: { touched, error } } = this.props;
      return (
         <div className="input__item">
            <input className={input.value.trim().length > 0 ? "fill" : ""} type={type} {...input} />
            <label className={touched && error ? "error" : ""}>{label}</label>
            <span className={touched && error ? "error" : ""} />
            {error && touched && <p>{error}</p>}
         </div>
      );
   }
}

export default renderInputField;
