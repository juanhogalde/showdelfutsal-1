import React from 'react';
import './ModalLowa.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const ModalLowa = props => {
  const {
    isMostrar = false,
    cerrarModalLowa = () => {
      console.log('No se envió función de cierre');
    },
    isPlasmarImagen = false,
  } = props;

  return (
    <div className={`${isMostrar ? 'CP-ModalLowa CP-ModalLowa-Mostrar' : 'CP-ModalLowa'}`}>
      <div className="CI-IconoCerrar" onClick={() => cerrarModalLowa()}>
        <AiOutlineCloseCircle
          className={
            isPlasmarImagen ? ' iconoCerrar-ModalLowa iconoCerrarPlasmar' : 'iconoCerrar-ModalLowa'
          }
        ></AiOutlineCloseCircle>
      </div>
      <div className="CI-Contenido-ModalLowa">{props.children}</div>
    </div>
  );
};
export default ModalLowa;
