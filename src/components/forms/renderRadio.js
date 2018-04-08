import React, { Component } from "react";

class RenderRadio extends Component {
      render() {
            const { input, meta: { touched, error }, options } = this.props;
            const hasError = touched && error;

            return (
                  <div className="radio__root">
                        {options.map(item => (
                              <label key={item.value}>
                                    <input
                                          type="radio"
                                          {...input}
                                          value={item.value}
                                          checked={item.value === input.value}
                                    />
                                    <div
                                          className={
                                                item.value === input.value
                                                      ? "radio__icon active"
                                                      : "radio__icon"
                                          }
                                    >
                                          {item.value === "male" ? "4" : "5"}
                                    </div>
                                    <p
                                          className={
                                                item.value === input.value
                                                      ? "radio__value active"
                                                      : "radio__value"
                                          }
                                    >
                                          {item.title}
                                    </p>
                              </label>
                        ))}
                        {hasError && <span className="error">{error}</span>}
                  </div>
            );
      }
}

export default RenderRadio;
