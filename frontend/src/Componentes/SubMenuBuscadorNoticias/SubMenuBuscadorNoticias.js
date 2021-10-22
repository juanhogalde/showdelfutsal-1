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
    </div>
  );
};

export default SubMenuBuscadorNoticias;
