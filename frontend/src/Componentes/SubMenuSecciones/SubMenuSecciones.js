import React from 'react';
import './SubMenuSecciones.css';

const SubMenuSecciones = ({
  obtenerSeccion = () => {
    console.log('No se envió función');
  },
  subcategoria = {},
}) => {
  return (
    <div className="CP-SN-Noticias-Menu">
      <div className="CI-Noticias-titulo">
        <h4>{subcategoria.label}</h4>
      </div>
      <div className="CI-Noticias-Menu">
        {/* <div className="I-Noticias-fixture" onClick={() => obtenerSeccion(1)}>
          <h5>Fixture</h5>
        </div>
        <div className="I-Noticias-tabla-posiciones" onClick={() => obtenerSeccion(2)}>
          <h5>Tabla de posiciones</h5>
        </div>
        <div className="I-Noticias-categoria" onClick={() => obtenerSeccion(3)}>
          <h5>Noticias</h5>
        </div> */}
      </div>
      <div className="I-Barra"></div>
    </div>
  );
};

export default SubMenuSecciones;
