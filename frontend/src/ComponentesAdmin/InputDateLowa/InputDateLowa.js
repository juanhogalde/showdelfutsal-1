import React, {useLayoutEffect, useState} from 'react';
import './InputDateLowa.css';
import {FaRegCalendarAlt} from 'react-icons/fa';
const InputDateLowa = props => {
  const {type, placeholder, onChange, required, value, name, id} = props;

  const [inputDateValue, setInputDateValue] = useState('');
  const obtenerValue = e => {
    setInputDateValue(e.target.value);
  };
  useLayoutEffect(() => {
    if (value) {
      console.log(value);
      /* if (value.split('').includes('T')) {
        let fecha = new Date(value);
        let auxFechaFormateada = `${fecha.getUTCDate()}/${
          fecha.getUTCMonth() < 10 ? `0${fecha.getUTCMonth()}` : fecha.getUTCMonth()
        }/${fecha.getUTCFullYear()}`;
        setInputDateValue(auxFechaFormateada);
      } else {
        setInputDateValue(new Date(value));
      } */
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
        {inputDateValue && `${inputDateValue}`}
        <span className="inputDate-Icono-Lowa">
          <FaRegCalendarAlt />
        </span>
      </div>
    </div>
  );
};
export default InputDateLowa;
