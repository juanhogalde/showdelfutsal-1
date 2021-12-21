import React, {useState} from 'react';
import './Enfrentamiento.css';
import iconoFlecha from '../../Static/Admin/iconoAtras.svg';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import Selector from '../Selector/Selector';
import BotonLowa from '../BotonLowa/BotonLowa';

const Enfrentamiento = () => {
  const [isMostrarCuerpo, setIsMostrarCuerpo] = useState(false);

  return (
    <div className="CP-Enfrentamiento">
      <div
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
      >
        <div className="I-Datos-Enfrentamiento">
          <Selector placeholder="Seleccione Equipo"></Selector>
          <Selector placeholder="Seleccione Equipo"></Selector>

          <InputDateLowa type="date" placeholder="Fecha de Enfrentamiento"></InputDateLowa>
          <InputDateLowa type="time" placeholder="Hora de Enfrentamiento"></InputDateLowa>

          <Selector></Selector>
          <BotonLowa></BotonLowa>
        </div>
      </div>
    </div>
  );
};
export default Enfrentamiento;
