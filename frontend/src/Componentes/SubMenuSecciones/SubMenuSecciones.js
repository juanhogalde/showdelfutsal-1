import React from 'react';
import './SubMenuSecciones.css';

const SubMenuSecciones = ({
  obtenerSeccion = () => {
    console.log('No se envió función');
  },
}) => {
  return (
    <div className="CP-SN-Noticias-Menu">
      <div className="CI-Noticias-titulo">
        <h4>CATEGORIA SECCION</h4>
      </div>
      <div className="CI-Noticias-Menu">
        <div className="I-Noticias-fixture" onClick={() => obtenerSeccion(1)}>
          <h6>Fixture</h6>
        </div>
        <div className="I-Noticias-tabla-posiciones" onClick={() => obtenerSeccion(2)}>
          <h6>Tabla de posiciones</h6>
        </div>
        <div className="I-Noticias-categoria" onClick={() => obtenerSeccion(3)}>
          <h6>Noticias</h6>
        </div>
      </div>
      <div className="I-Barra"></div>
    </div>
  );
};

export default SubMenuSecciones;
