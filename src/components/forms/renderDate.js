import React from "react";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

class RenderDate extends React.Component {
    render() {
        const {
            label,
            input,
            meta: { error }
        } = this.props;
        return (
            <div className="date__root">
                <p>{label}</p>
                <label>
                    <input type="date" {...input} />
                    <div className="date__items" />
                    <p className="date__info">
                        {input.value !== ""
                            ? `${new Date(input.value).getDate()} ${
                                  monthNames[new Date(input.value).getMonth()]
                              } ${new Date(input.value).getFullYear()} ${
                                  days[new Date(input.value).getDay()]
                              }`
                            : ""}
                    </p>
                    <p className="date__error">{error}</p>
                </label>
            </div>
        );
    }
}

export default RenderDate;
