import React from "react";

const RenderInput = ({ type, input }) => {
    if (type === "textarea") {
        return (
            <textarea
                className={input.value.trim().length > 0 ? "fill" : ""}
                type={type}
                {...input}
            />
        );
    } else {
        return (
            <input
                className={input.value.trim().length > 0 ? "fill" : ""}
                type={type}
                {...input}
            />
        );
    }
};

export default RenderInput;
