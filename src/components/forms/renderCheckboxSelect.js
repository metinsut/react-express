import React, { Component } from "react";

const years = [2000, 2001, 2002, 2003];

class RenderCheckboxSelect extends Component {
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
            input,
            label,
        } = this.props;
        return (
            <div className="checkboxGroup__root">
                <h1>{label}</h1>
                <div
                    onClick={this.toogleCheckBoxMenu}
                    className="checkboxGroup__menu"
                >
                    <h3 className="checkboxGroup__menu__title">
                        {input.value !== ""
                            ? input.value
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
                                                return input.onChange(item);
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
        );
    }
}

export default RenderCheckboxSelect;
