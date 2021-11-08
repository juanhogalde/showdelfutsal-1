import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';

const PaginasSeccionesAdmin = ({
  funcionDeBotonSecciones = () => {
    console.log('No se envió función de botón');
  },
  tituloBotonSecciones = '',
}) => {
  return (
    <div className="CP-Pagina-Secciones-Admin">
      <div className="CI-Pagina-Secciones-Admin-Cabecera">
        <div className="I-Boton-Secciones-Admin">
          <BotonLowa onClick={funcionDeBotonSecciones} tituloboton={tituloBotonSecciones} />
        </div>
        <div className="I-Filtros-Secciones-Admin">
          <FiltroNoticiasAdmin />
        </div>
      </div>
      <div className="CI-Pagina-Secciones-Admin-Noticias">
        <div className="I-Noticias-Secciones-Admin">
          <TarjetaNoticias />
        </div>
      </div>
    </div>
  );
};

export default PaginasSeccionesAdmin;
