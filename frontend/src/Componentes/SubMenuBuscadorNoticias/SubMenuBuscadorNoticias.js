import React from 'react';
import './SubMenuBuscadorNoticias.css';

const SubMenuBuscadorNoticias = () => {
  return (
    <div className="CP-SN-Noticias-Busquedas">
      <div className="I-Noticias-busqueda-titulo">
        <p>NOTICIAS</p>
      </div>
      <div className="I-Noticias-buscador">
        <div className="I-contendor-busqueda">
          <input
            type="BusquedaNoticias"
            name="BusquedaNoticias"
            className="Input-busqueda"
            placeholder="Busqueda"
          />
        </div>
      </div>
    </div>
  );
};

export default SubMenuBuscadorNoticias;
