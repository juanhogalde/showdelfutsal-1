import React, {useRef} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import './InputLowa.css';

const InputLowa = props => {
  const {type, onClick, placeholder, onChange, autocomplete, required, value, name, id} = props;

  const resetValue = () => {
    inputElement.current.value = '';
  };
  const inputElement = useRef(null);
  return (
    <div className="CP-Input">
      <input
        ref={inputElement}
        className="input-Lowa"
        id={id}
        placeholder={placeholder}
        type={type}
        onClick={onClick}
        onChange={onChange}
        autoComplete={autocomplete}
        required={required}
        value={value}
        name={name}
      ></input>
      <span className="input-Icono-Lowa" onClick={() => resetValue(name)}>
        <AiOutlineClose></AiOutlineClose>
      </span>
    </div>
  );
};
InputLowa.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  inputIcono: false,
};
export default InputLowa;
