import React from "react";

const RenderFile = ({ input, type, meta: { touched, error }, options }) => {
    return (
        <div className="file__root">
            <input type={type} />
        </div>
    );
};

export default RenderFile;
