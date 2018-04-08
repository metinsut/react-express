import React from "react";

class RenderSwitch extends React.Component {
      render() {
            const { input, meta: { error } } = this.props;
            console.log(input.value);
            return (
                  <div className="switch__root">
                        <label htmlFor="checkbox">
                              <input id="checkbox" type="checkbox" {...input} />
                              <div className="switch__items" />
                              <p className="switch__info">
                                    {input.value === true ? "Active" : "Pasive"}
                              </p>
                              <p className="switch__error">{error}</p>
                        </label>
                  </div>
            );
      }
}

export default RenderSwitch;
