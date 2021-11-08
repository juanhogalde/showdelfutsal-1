import React, {useRef, useState} from 'react';
import './InputLowa.css';
import {FiUpload} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import imagen from '../../Static/Img/iso.png';

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
      return false;
    },
  } = props;
  const inputElement = useRef(null);
  const imgElement = useRef(null);
  var reader = new FileReader();

  const resetValue = () => {
    inputElement.current.value = '';
  };

  const obtenerArchivos = () => {
    reader.onloadend = function () {
      imgElement.current.src = reader.result;
    };

    if (inputElement.current.files[0]) {
      reader.readAsDataURL(inputElement.current.files[0]);
    } else {
      imgElement.current.src = '';
    }
    onChange(name, inputElement.current.files);
  };

  /* useEffect(() => {
    console.log('Effects');

    console.log(inputElement);
    console.log(imgElement);
  }, []);

  useLayoutEffect(() => {
    console.log('Layaout Effects');
    console.log(inputElement);
    console.log(imgElement);
  }, []); */
  return (
    <div className={type === 'file' ? 'CP-Input-File' : 'CP-Input'}>
      <div className="cuerpoInputFile">
        {type === 'file' && <label className="label-InputFile-Lowa">Seleccione imágen...</label>}
        <input
          ref={inputElement}
          className="input-Lowa"
          id={id}
          placeholder={placeholder}
          type={type}
          onClick={onClick}
          onChange={type === 'file' ? () => obtenerArchivos() : onChange}
          autoComplete={autocomplete}
          required={required}
          value={value}
          name={name}
          /*  files={e => obtenerArchivos(e)} */
        ></input>
        {type !== 'file' ? (
          <span
            className="input-Icono-Lowa"
            onClick={inputConIcono ? () => funcionDeIcono() : () => resetValue(name)}
          >
            {inputConIcono ? inputConIcono : <AiOutlineClose></AiOutlineClose>}
          </span>
        ) : (
          <span className="input-Icono-File-Lowa">
            <FiUpload size={25} />
          </span>
        )}
      </div>

      {type === 'file' && (
        <div className="CI-VistaPrevia-Imágen">
          <img ref={imgElement} alt="" src={imagen}></img>
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
