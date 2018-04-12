import React from "react";

class RenderSwitch extends React.Component {
    render() {
        const { label, input, meta: { error } } = this.props;
        return (
            <div className="switch__root">
                <p>{label}</p>
                <label>
                    <input type="checkbox" {...input} />
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
