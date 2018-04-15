import React from "react";

class CheckboxGroup extends React.Component {
      checkboxMenu = React.createRef();

      componentDidMount() {
            if (typeof window !== "undefined") {
                  window.addEventListener("click", this.closeCheckBoxMenu);
            }
      }

      componentWillUnmount() {
            if (typeof window !== "undefined") {
                  window.removeEventListener("click", this.closeCheckBoxMenu);
            }
      }

      toogleCheckBoxMenu = () => {
            this.checkboxMenu.current.classList.add("open");
      };

      closeCheckBoxMenu = e => {
            console.log(e.target.className);
            if (
                  e.target.className !== "checkboxGroup__menu__title"
                  // e.target.className !== "menu__icon" ||
                  // e.target.className !== "checkboxGroup__menu"
            ) {
                  if (e.target.classList.value !== "checkboxGroup__block") {
                        this.checkboxMenu.current.classList.remove("open");
                  } else if (
                        e.target.className !== "checkboxGroup__menu__title"
                  ) {
                        this.checkboxMenu.current.classList.remove("open");
                  } else if (e.target.className !== "checkbox__items") {
                        this.checkboxMenu.current.classList.remove("open");
                  }
            }
      };

      render() {
            const { title, input, options } = this.props;
            return (
                  <div className="checkboxGroup__root">
                        <h1>{title}</h1>
                        <div
                              onClick={this.toogleCheckBoxMenu}
                              className="checkboxGroup__menu"
                        >
                              <h3 className="checkboxGroup__menu__title">
                                    Pick your Interested In
                              </h3>
                              <div className="menu__icon">K</div>
                              <div
                                    ref={this.checkboxMenu}
                                    className="checkbox__root"
                              >
                                    {options.map((item, key) => {
                                          return (
                                                <label
                                                      key={key}
                                                      className="checkboxGroup__block"
                                                >
                                                      <input
                                                            type="checkbox"
                                                            checked={
                                                                  input.value.indexOf(
                                                                        item
                                                                  ) !== -1
                                                            }
                                                            onChange={event => {
                                                                  const newValue = [
                                                                        ...input.value
                                                                  ];
                                                                  if (
                                                                        event
                                                                              .target
                                                                              .checked
                                                                  ) {
                                                                        newValue.push(
                                                                              item
                                                                        );
                                                                  } else {
                                                                        newValue.splice(
                                                                              newValue.indexOf(
                                                                                    item
                                                                              ),
                                                                              1
                                                                        );
                                                                  }
                                                                  return input.onChange(
                                                                        newValue
                                                                  );
                                                            }}
                                                      />
                                                      <div
                                                            className={
                                                                  input.value.indexOf(
                                                                        item
                                                                  ) > -1
                                                                        ? "checkbox__items open"
                                                                        : "checkbox__items close"
                                                            }
                                                      >
                                                            {input.value.indexOf(
                                                                  item
                                                            ) > -1
                                                                  ? "y"
                                                                  : ""}
                                                      </div>
                                                      <p className="checkbox__info">
                                                            {item}
                                                      </p>
                                                </label>
                                          );
                                    })}
                              </div>
                        </div>
                  </div>
            );
      }
}

export default CheckboxGroup;
