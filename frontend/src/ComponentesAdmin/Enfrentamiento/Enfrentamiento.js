import React, {useState} from 'react';
import './Enfrentamiento.css';
import iconoFlecha from '../../Static/Admin/iconoAtras.svg';
import InputLowa from '../InputLowa/InputLowa';
import {FiClock} from 'react-icons/fi';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import Selector from '../Selector/Selector';

const Enfrentamiento = () => {
  const [isMostrarCuerpo, setIsMostrarCuerpo] = useState(false);
  const apertura = foco => {
    console.log(foco);
    if (foco) {
      setIsMostrarCuerpo(!isMostrarCuerpo);
    }
  };
  return (
    <div className="CP-Enfrentamiento">
      <div
        tabIndex="1"
        /* onFocus={() => apertura(true)} */
        onClick={() => setIsMostrarCuerpo(!isMostrarCuerpo)}
        className={
          isMostrarCuerpo ? 'CI-Cabecera-Enfrentamiento borde' : 'CI-Cabecera-Enfrentamiento'
        }
      >
        <p>Crear Enfrentamiento</p>
        <img
          alt=""
          src={iconoFlecha}
          className={
            isMostrarCuerpo ? 'iconoFlecha-Enfrentamiento-Apertura' : 'iconoFlecha-Enfrentamiento'
          }
        ></img>
      </div>
      <div
        className={
          isMostrarCuerpo
            ? 'CI-Cuerpo-Enfrentamiento aperutra-Enfrentamiento'
            : 'CI-Cuerpo-Enfrentamiento'
        }
        tabIndex="2"
        /* onFocus={() => apertura(false)} */
      >
        <div className="I-Datos-Enfrentamiento">
          <Selector></Selector>

          <Selector></Selector>

          <InputDateLowa placeholder="Fecha de Enfrentamiento"></InputDateLowa>
          <Selector></Selector>
        </div>
      </div>
    </div>
  );
};
export default Enfrentamiento;
