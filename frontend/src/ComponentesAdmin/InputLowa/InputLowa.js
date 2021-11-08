import React, {useEffect, useRef} from 'react';
import './InputLowa.css';
import {FiUpload} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import imagen from '../../Static/Admin/imgPanel.png';

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
    funcionDeIcono = () => {
      console.log('No se envió función de Input con Icono');
    },
  } = props;

  const resetValue = () => {
    inputElement.current.value = '';
  };
  const inputElement = useRef(null);

  return (
    <div className={type === 'file' ? 'CP-Input-File' : 'CP-Input'}>
      {type === 'file' && <label className="label-InputFile-Lowa">Seleccione imágen...</label>}
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
      {type !== 'file' ? (
        <span
          className="input-Icono-Lowa"
          onClick={funcionDeIcono ? () => funcionDeIcono() : () => resetValue(name)}
        >
          {inputConIcono ? inputConIcono : <AiOutlineClose></AiOutlineClose>}
        </span>
      ) : (
        <span className="input-Icono-File-Lowa">
          <FiUpload size={25} />
        </span>
      )}
      {type === 'file' && (
        <div className="CI-VistaPrevia-Imágen">
          <img alt="" src={imagen}></img>
        </div>
      )}
    </div>
  );
};
InputLowa.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  inputIcono: '',
};
export default InputLowa;
