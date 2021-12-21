import React, {useRef, useState} from 'react';
/* import {AiOutlineCheck} from 'react-icons/ai';
 */ import Alertas from '../Alertas/Alertas';
import './CampoDeEdicion.css';

const CampoDeEdicion = props => {
  const [valor, setValor] = useState({
    isInvalido: false,
    mensaje: '',
  });
  const {
    name,
    value,
    id,
    disabled,
    required,
    onChange,
    readOnly,
    type,
    min,
    max,
    respuestaDeComponente,
  } = props;
  const inputCampo = useRef(null);
  const validarCampo = () => {
    if (inputCampo.current.value < 0) {
      console.log('Campo inválido');
      setValor({
        isInvalido: true,
        mensaje: 'No se aceptan valores negativos...',
      });
    } else {
      return respuestaDeComponente(inputCampo.current.name, inputCampo.current.value, false);
    }
  };
  const valoresPorDefectoAlertaCampoDeEdicion = respuesta => {
    if (respuesta) {
      setValor({
        isInvalido: false,
        mensaje: '',
      });
    }
  };
  return (
    <div className="CP-TextareaLowa-EditarCampo" tabIndex={1} /* onBlur={valor ? '' : onBlur} */>
      <input
        ref={inputCampo}
        id={id}
        name={name}
        disabled={disabled}
        required={required}
        autoCapitalize="sentences"
        className="componente-TextAreaLowa-EditarCampo"
        onChange={onChange}
        autoComplete="off"
        value={value}
        readOnly={readOnly}
        autoFocus
        type={type}
        min={min}
        max={max}
        pattern="[0-9?!-]"
      ></input>
      <div className="botonOk-CampoDeEdicion" onClick={() => validarCampo()}>
        <p>Ok</p>
      </div>
      <Alertas
        mostrarSweet={valor.isInvalido}
        tipoDeSweet="error"
        subtitulo={valor.mensaje}
        RespuestaDeSweet={valoresPorDefectoAlertaCampoDeEdicion}
      ></Alertas>
    </div>
  );
};
CampoDeEdicion.defaultProps = {
  id: '',
  name: '',
  placeholder: 'Placeholder',
  disabled: false,
  required: false,
};
export default CampoDeEdicion;
