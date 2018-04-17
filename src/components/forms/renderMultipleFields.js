import React, { Component } from "react";
import RenderField from "../forms/renderField";
import RenderCheckboxSelect from "../forms/renderCheckboxSelect";
import RenderCheckbox from "./renderCheckbox";

class RenderMultipleFields extends Component {
    render() {
        const {
            label,
            company: { name, startYear, endYear, stillWork, position }
        } = this.props;
        return (
            <div className="multiple__input__root">
                <RenderField
                    type="text"
                    input={name.input}
                    meta={name.meta}
                    label={label.company}
                />

                <RenderField
                    type="text"
                    input={position.input}
                    meta={position.meta}
                    label={label.position}
                />

                <RenderCheckboxSelect
                    input={startYear.input}
                    meta={startYear.meta}
                    label={label.startYear}
                />

                { (stillWork.input.value === "" || stillWork.input.value === false) &&
                <RenderCheckboxSelect
                    input={endYear.input}
                    meta={endYear.meta}
                    label={label.endYear}
                />
                }

                <RenderCheckbox
                    input={stillWork.input}
                    meta={stillWork.meta}
                    label={label.stillWork}
                    options={{ first: "Still Work", second: "" }}
                />
            </div>
        );
    }
}

export default RenderMultipleFields;
