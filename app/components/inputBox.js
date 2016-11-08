import React from 'react';

const InputBox = ({
    label,
    value
}) => (
    <div className="inputBox">
        <label>{label}</label>
        <input ref={value} />
    </div>
);

export default InputBox;
