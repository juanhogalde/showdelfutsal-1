import React, {useState} from 'react';
import './InputDateLowa.css';
import {FaRegCalendarAlt} from 'react-icons/fa';

const InputDateLowa = props => {
  const {type, placeholder, onChange, required, value, name, id} = props;

  const [inputDateValue, setInputDateValue] = useState('');

  const obtenerValue = e => {
    setInputDateValue(e.nativeEvent.srcElement.value);
  };

  return (
    <div className="CP-InputDateLowa">
      <div
        className={`${
          inputDateValue
            ? 'placeholder-InputDateLowaConValue placeholder-InputDateLowa'
            : 'placeholder-InputDateLowa'
        }`}
      >
        <span className="titulo-Placeholder-InputDateLowa">{placeholder}</span>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        className={`${inputDateValue ? 'inputDate-Lowa inputDate-LowaConValue' : 'inputDate-Lowa'}`}
        onInput={e => obtenerValue(e)}
      ></input>
      <div className="value-InputDateLowa">
        {inputDateValue &&
          `${inputDateValue.split('-')[2]}/${inputDateValue.split('-')[1]}/${
            inputDateValue.split('-')[0]
          }`}
        <span className="inputDate-Icono-Lowa">
          <FaRegCalendarAlt />
        </span>
      </div>
    </div>
  );
};
export default InputDateLowa;
