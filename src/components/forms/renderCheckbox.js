import React from "react";

class RenderCheckbox extends React.Component {
    render() {
        const { label, input, meta: { error } } = this.props;
        return (
            <div className="checkbox__root">
                <p className="checkbox__title">{label}</p>
                <label>
                    <input type="checkbox" {...input} />
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
                        {input.value === true ? "Read" : "Unread"}
                    </p>
                    <p className="checkbox__error">{error}</p>
                </label>
            </div>
        );
    }
}

export default RenderCheckbox;
