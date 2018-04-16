import React, { Component } from "react";
import RenderInput from "../forms/renderInput";

const years = [2000, 2001, 2002, 2003];

class RenderMultipleFields extends Component {
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
        if (
            "checkboxGroup__menu" !== e.target.className &&
            "checkboxGroup__menu__title" !== e.target.className &&
            "menu__icon" !== e.target.className &&
            this.checkboxMenu.current.contains(e.target) === false
        ) {
            this.checkboxMenu.current.classList.remove("open");
        }
    };

    closeCheckBoxMenuDirect = e => {
        this.checkboxMenu.current.classList.remove("open");
    };

    render() {
        const {
            label,
            company: { name, startYear, endYear, stillWork, position }
        } = this.props;
        return (
            <div className="multiple__input__root">

                <div className="input__item">
                    <RenderInput type="text" input={name.input} />
                    <label
                        className={
                            name.meta.touched && name.meta.error ? "error" : ""
                        }
                    >
                        {label.company}
                    </label>
                    <span
                        className={
                            name.meta.touched && name.meta.error ? "error" : ""
                        }
                    />
                    <p
                        className={
                            name.meta.error && name.meta.touched ? "open" : ""
                        }
                    >
                        {name.meta.error}
                    </p>
                </div>

                <div className="input__item">
                    <RenderInput type="text" input={position.input} />
                    <label
                        className={
                            position.meta.touched && position.meta.error
                                ? "error"
                                : ""
                        }
                    >
                        {label.position}
                    </label>
                    <span
                        className={
                            position.meta.touched && position.meta.error
                                ? "error"
                                : ""
                        }
                    />
                    <p
                        className={
                            position.meta.error && position.meta.touched
                                ? "open"
                                : ""
                        }
                    >
                        {position.meta.error}
                    </p>
                </div>

                <div className="checkboxGroup__root">
                    <h1>{label.startYear}</h1>
                    <div
                        onClick={this.toogleCheckBoxMenu}
                        className="checkboxGroup__menu"
                    >
                        <h3 className="checkboxGroup__menu__title">
                            {startYear.input.value !== ""
                                ? startYear.input.value
                                : "Select Your Start Year"}
                        </h3>
                        <div className="menu__icon">K</div>
                        <div ref={this.checkboxMenu} className="checkbox__root">
                            {years.map((item, key) => {
                                return (
                                    <label
                                        key={key}
                                        className="checkboxGroup__block"
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={e => {
                                                if (e.target.checked) {
                                                    this.closeCheckBoxMenuDirect();
                                                    return startYear.input.onChange(
                                                        item
                                                    );
                                                } else {
                                                    this.closeCheckBoxMenuDirect();
                                                }
                                            }}
                                        />
                                        <p className="checkbox__info">{item}</p>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="checkboxGroup__root">
                    <h1>{label.endYear}</h1>
                    <div
                        onClick={this.toogleCheckBoxMenu}
                        className="checkboxGroup__menu"
                    >
                        <h3 className="checkboxGroup__menu__title">
                            {endYear.input.value !== ""
                                ? endYear.input.value
                                : "Select Your End Year"}
                        </h3>
                        <div className="menu__icon">K</div>
                        <div ref={this.checkboxMenu} className="checkbox__root">
                            {years.map((item, key) => {
                                return (
                                    <label
                                        key={key}
                                        className="checkboxGroup__block"
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={e => {
                                                if (e.target.checked) {
                                                    this.closeCheckBoxMenuDirect();
                                                    return endYear.input.onChange(
                                                        item
                                                    );
                                                } else {
                                                    this.closeCheckBoxMenuDirect();
                                                }
                                            }}
                                        />
                                        <p className="checkbox__info">{item}</p>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="checkbox__root">
                    <p className="checkbox__title">{label.stillWork}</p>
                    <label>
                        <input type="checkbox" {...stillWork.input} />
                        <div
                            className={
                                stillWork.input.value === true
                                    ? "checkbox__items open"
                                    : "checkbox__items close"
                            }
                        >
                            {stillWork.input.value === true ? "y" : ""}
                        </div>
                        <p className="checkbox__info">
                            {stillWork.input.value === true ? "Still Work" : ""}
                        </p>
                        <p className="checkbox__error">
                            {stillWork.meta.error}
                        </p>
                    </label>
                </div>
            </div>
        );
    }
}

export default RenderMultipleFields;
