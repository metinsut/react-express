import React from "react";

const RenderFile = ({ input: { value,onChange }, type }) => {
    return (
        <div className="file__root">
            <label>
                <input type={type} multiple onChange={ () => onChange(this)} value={value}/>
                <div className="icon">i</div>
                <p className="file">Upload an Image</p>
            </label>
        </div>
    );
};

export default RenderFile;
