import React from "react";

const renderInputField = ({
   input,
   label,
   type,
   meta: { touched, error, warning }
}) => {
   return (
      <div className={touched ? "input__item item--focused" : "input__item"}>
         <label className="item__label" htmlFor="name">
            name
         </label>
         <div className="item__input">
            <input type="text" id="name" {...input} />
            <span className="border" />
         </div>
         <div className="item__detail">
            <p>Error</p>
         </div>
      </div>
   );
};

export default renderInputField;
