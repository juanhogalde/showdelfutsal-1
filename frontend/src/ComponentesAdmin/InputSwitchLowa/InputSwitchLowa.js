import React from 'react';
import './InputSwitchLowa.css';

const InputSwitchLowa = props => {
  const {onClick, onChange, required, value, name, id, checked} = props;
  return (
    <label className="switch">
      <input
        id={id}
        onClick={onClick}
        onChange={onChange}
        required={required}
        value={value}
        name={name}
        type="checkbox"
        checked={checked}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default InputSwitchLowa;
