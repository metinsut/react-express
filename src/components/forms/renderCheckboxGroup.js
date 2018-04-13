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

    closeCheckBoxMenu = e => {
        if (!e.target.matches(".checkboxGroup__menu")) {
            console.log( this.checkboxMenu.current);
            // console.log(e.target);
            if (this.checkboxMenu.current.classList.contains("open")) {
                this.checkboxMenu.current.classList.remove("open");
            }
        }else{
            console.log( this.checkboxMenu.current.classList);
        }
    };

    toogleCheckBoxMenu = () => {
        this.checkboxMenu.current.classList.toggle("open");
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
                    <h3>Pick your Interested In</h3>
                    <div className="menu__icon">K</div>
                    <div ref={this.checkboxMenu} className="checkbox__root">
                        {options.map((item, key) => {
                            return (
                                <label
                                    key={key}
                                    className="checkboxGroup__block"
                                >
                                    <input
                                        type="checkbox"
                                        checked={
                                            input.value.indexOf(item) !== -1
                                        }
                                        onChange={event => {
                                            const newValue = [...input.value];
                                            if (event.target.checked) {
                                                newValue.push(item);
                                            } else {
                                                newValue.splice(
                                                    newValue.indexOf(item),
                                                    1
                                                );
                                            }
                                            return input.onChange(newValue);
                                        }}
                                    />
                                    <div
                                        className={
                                            input.value.indexOf(item) > -1
                                                ? "checkbox__items open"
                                                : "checkbox__items close"
                                        }
                                    >
                                        {input.value.indexOf(item) > -1
                                            ? "y"
                                            : ""}
                                    </div>
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

export default CheckboxGroup;
