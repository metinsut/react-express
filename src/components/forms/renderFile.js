import React from "react";

const RenderFile = ({ input, type, meta: { touched, error }, options }) => {
    return (
        <div className="file__root">
            <label>
                <input type={type} {...input}/>
                <div className="icon">i</div>
                <p className="file">Upload an Image</p>
            </label>
        </div>
    );
};

export default RenderFile;
