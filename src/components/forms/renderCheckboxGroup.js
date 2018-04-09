import React from "react";

const CheckboxGroup = ({ title, options, input }) => {
    return (
        <div className="checkboxGroup__root">
            <h1>{title}</h1>
            {options.map((item, key) => {
                return (
                    <label key={key} className="checkboxGroup__block">
                        <input
                            id="interestedIn"
                            type="checkbox"
                            checked={input.value.indexOf(item) !== -1}
                            onChange={event => {
                                const newValue = [...input.value];
                                if (event.target.checked) {
                                    newValue.push(item);
                                } else {
                                    newValue.splice(newValue.indexOf(item), 1);
                                }
                                return input.onChange(newValue);
                            }}
                        />
                        <p>{item}</p>
                    </label>
                );
            })}
        </div>
    );
};

export default CheckboxGroup;
