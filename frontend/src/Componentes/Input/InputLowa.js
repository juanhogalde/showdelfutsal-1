import React from 'react';
import './InputLowa.css';

const InputLowa = props => {
  const {type, onClick, placeholder, onChange, autocomplete, required} = props;
  return (
    <input
      className="input-Lowa"
      placeholder={placeholder}
      type={type}
      onClick={onClick}
      onChange={onChange}
      autoComplete={autocomplete}
      required={required}
    ></input>
  );
};
export default InputLowa;
