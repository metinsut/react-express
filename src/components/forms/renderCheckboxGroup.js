import React from "react";

class CheckboxGroup extends React.Component {
    render() {
        const {title,input,options} = this.props;
        return (
            <div className="checkboxGroup__root">
                <h1>{title}</h1>
                <div className="checkboxGroup__menu">
                    <h3>Pick your Interested In</h3>
                    <div className="menu__icon">K</div>
                    <div className="menu__content">
                        {options.map((item, key) => {
                            return (
                                <label
                                    key={key}
                                    className="checkboxGroup__block"
                                >
                                    <input
                                        id="interestedIn"
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
                                    <p>{item}</p>
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
