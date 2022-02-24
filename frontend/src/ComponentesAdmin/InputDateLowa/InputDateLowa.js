import React, {useLayoutEffect, useState} from 'react';
import './InputDateLowa.css';
import {FaRegCalendarAlt} from 'react-icons/fa';
const InputDateLowa = props => {
  const {type, placeholder, onChange, required, value, name, id} = props;

  const [inputDateValue, setInputDateValue] = useState('');
  const obtenerValue = e => {
    setInputDateValue(e.target.value);
  };
  const formatearFechaUTC = dato => {
    let fecha = new Date(dato);
    return `${fecha.getUTCDate()}/${
      fecha.getUTCMonth() < 10 ? `0${fecha.getUTCMonth()}` : fecha.getUTCMonth()
    }/${fecha.getUTCFullYear()}`;
  };
  useLayoutEffect(() => {
    if (value) {
      let fecha = new Date(value);
      let auxFechaFormateada = `${fecha.getUTCDate()}/${
        fecha.getUTCMonth() < 10 ? `0${fecha.getUTCMonth()}` : fecha.getUTCMonth()
      }/${fecha.getUTCFullYear()}`;
      setInputDateValue(auxFechaFormateada);
    }
  }, [value]);
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
        required={required}
        className={`${inputDateValue ? 'inputDate-Lowa inputDate-LowaConValue' : 'inputDate-Lowa'}`}
        onInput={e => obtenerValue(e)}
        min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
      ></input>
      <div className="value-InputDateLowa">
        {inputDateValue &&
          `${
            type === 'datetime-local'
              ? `${formatearFechaUTC(inputDateValue)} ${inputDateValue.split('T')[1]}Hs `
              : inputDateValue
          }`}
        <span className="inputDate-Icono-Lowa">
          <FaRegCalendarAlt />
        </span>
      </div>
    </div>
  );
};
export default InputDateLowa;
