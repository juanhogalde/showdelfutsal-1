import React, {useRef} from 'react';
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
    onKeyPress,
    autocomplete,
    required,
    value,
    src,
    name,
    id,
    inputConIcono,
    disabled,
    ocultarIconoLateral = false,
    min,
    max,
    funcionObtenerTamanioImagen = () => {
      console.log('No se envió función');
    },
    funcionDeIcono = () => {
      console.log('No se envió función de Input con Icono');
      return false;
    },
    multiple,
    onFocus,
    onBlur,
  } = props;

  const inputElement = useRef();
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
    if (inputElement.current.files.length === 0) {
      imgElement.current.src = imagen;
    }
    onChange(name, inputElement.current.files);
    if (funcionObtenerTamanioImagen) {
      setTimeout(() => {
        funcionObtenerTamanioImagen(imgElement);
      }, 500);
    }
  };

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
          disabled={disabled}
          multiple={multiple}
          onKeyPress={onKeyPress}
          onFocus={onFocus}
          onBlur={onBlur}
          min={min}
          max={max}
          accept={type === 'file' ? 'image/png, image/jpeg' : ''}
        ></input>
        {type !== 'file' ? (
          <span
            className="input-Icono-Lowa"
            onClick={
              inputConIcono
                ? () => funcionDeIcono()
                : !ocultarIconoLateral
                ? () => resetValue(name)
                : null
            }
          >
            {inputConIcono ? (
              inputConIcono
            ) : !ocultarIconoLateral ? (
              <AiOutlineClose></AiOutlineClose>
            ) : null}
          </span>
        ) : (
          <span className="input-Icono-File-Lowa">
            <FiUpload size={25} />
          </span>
        )}
      </div>

      {type === 'file' && (
        <div className="CI-VistaPrevia-Imágen">
          <img ref={imgElement} alt="" src={src ? src : imagen}></img>
        </div>
      )}
    </div>
  );
};
InputLowa.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  inputIcono: '',
  multiple: false,
};
export default InputLowa;
