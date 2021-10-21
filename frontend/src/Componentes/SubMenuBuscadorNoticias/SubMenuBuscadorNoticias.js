import React from 'react';
import './SubMenuBuscadorNoticias.css';

const SubMenuBuscadorNoticias = () => {
  return (
    <div className="CP-SN-Noticias-Busquedas">
      <p>NOTICIAS</p>
      <input
        type="BusquedaNoticias"
        name="BusquedaNoticias"
        className="Input-busqueda"
        placeholder="Busqueda"
      />
      {/* <div className="I-Noticias-busqueda-titulo">
      </div>
      <div className="I-Noticias-buscador">
        
      </div> */}
    </div>
  );
};

export default SubMenuBuscadorNoticias;
