import React from "react";

class RenderCheckbox extends React.Component {

    render() {
        const {
            label,
            input,
            options: { first, second },
            meta: { error }
        } = this.props;

        console.log(input.value)
        return (
            <div className="checkbox__root">
                <p className="checkbox__title">{label}</p>
                <label>
                    <input type="checkbox" {...input}/>
                    <div
                        className={
                            input.value === true
                                ? "checkbox__items open"
                                : "checkbox__items close"
                        }
                    >
                        {input.value === true ? "y" : ""}
                    </div>
                    <p className="checkbox__info">
                        {input.value === true ? first : second}
                    </p>
                    <p className="checkbox__error">{error}</p>
                </label>
            </div>
        );
    }
}

export default RenderCheckbox;
