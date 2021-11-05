import React, {useRef} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import './InputLowa.css';

const InputLowa = props => {
  const {
    type,
    onClick,
    placeholder,
    onChange,
    autocomplete,
    required,
    value,
    name,
    id,
    inputConIcono,
    funciónDeIcono = () => {
      console.log('No se envió función de Input con Icono');
    },
  } = props;

  const resetValue = () => {
    inputElement.current.value = '';
  };
  const inputElement = useRef(null);
  /* return (
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
        {inputConIcono ? inputConIcono : <AiOutlineClose></AiOutlineClose>}
      </span>
    </div>
  ); */
  if (type !== 'textarea') {
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
        <span
          className="input-Icono-Lowa"
          onClick={funciónDeIcono ? () => funciónDeIcono() : () => resetValue(name)}
        >
          {inputConIcono ? inputConIcono : <AiOutlineClose></AiOutlineClose>}
        </span>
      </div>
    );
  } else {
    return (
      <div className="CP-Input-TextArea">
        <input
          ref={inputElement}
          className="input-Lowa-TextArea"
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
      </div>
    );
  }
};
InputLowa.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  inputIcono: '',
};
export default InputLowa;
