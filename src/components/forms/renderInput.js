import React from "react";

const RenderInput = ({ type, input }) => {
    switch (type) {
        case "text":
        case "email":
        case "password":
            return (
                <input
                    className={input.value.trim().length > 0 ? "fill" : ""}
                    type={type}
                    {...input}
                />
            );
            break;
        case "textarea":
            return (
                <textarea
                    className={input.value.trim().length > 0 ? "fill" : ""}
                    type={type}
                    {...input}
                />
            );
            break;
        default:
            return <input type={type} {...input} />;
            break;
    }
};

export default RenderInput;
