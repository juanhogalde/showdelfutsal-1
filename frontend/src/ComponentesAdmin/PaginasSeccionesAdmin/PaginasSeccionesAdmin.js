import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';

const PaginaNoticiasAdmin = () => {
  return (
    <div className="LI-Pagina-Secciones-Admin">
      <div className="CP-Pagina-Secciones-Buscador">
        <div className="CP-Pagina-Secciones-Admin">
          <div className="CI-Boton-Secciones-Admin">
            <BotonLowa />
          </div>
          <div className="CI-Filtros-Secciones-Admin">
            <FiltroNoticiasAdmin />
          </div>
        </div>
      </div>
      <div className="CP-Pagina-Secciones-Admin-Noticias">
        <div className="CI-Noticias-Secciones-Admin">
          <TarjetaNoticias />
        </div>
      </div>
    </div>
  );
};

export default PaginaNoticiasAdmin;
