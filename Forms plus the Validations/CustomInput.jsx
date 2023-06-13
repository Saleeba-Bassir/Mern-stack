import React from 'react';

const CustomInput = (props) => {
  const customHandleInput = (e) => {
    props.handleInput(e);
  };

  return (
    <div className="form-group">
      <label className="form-label">{props.label}:</label>
      <input
        type="text"
        className="form-input"
        value={props.value}
        onChange={customHandleInput}
      />
    </div>
  );
};

export default CustomInput;
