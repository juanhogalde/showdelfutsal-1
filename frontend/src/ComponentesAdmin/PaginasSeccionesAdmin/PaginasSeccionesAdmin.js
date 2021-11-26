import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';
import TarjetaGaleria from '../TarjetaGaleria/TarjetaGaleria';
import {useHistory} from 'react-router';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';

const PaginasSeccionesAdmin = ({
  funcionDeBotonSecciones = () => {
    console.log('No se envió función de botón');
  },
  tituloBotonSecciones = '',
  tituloFiltroSecciones,
  isSeccionNoticias = false,
  isSeccionGaleria = false,
  isSeccionTorneos = false,
}) => {
  const historialDeNavegacion = useHistory();

  const editarNoticia = () => {
    historialDeNavegacion.push(`/Noticia/Ver/${1234}`);
  };

  return (
    <div className="CP-Pagina-Secciones-Admin">
      <div className="CI-Pagina-Secciones-Admin-Cabecera">
        <div className="I-Boton-Secciones-Admin">
          <BotonLowa onClick={funcionDeBotonSecciones} tituloboton={tituloBotonSecciones} />
        </div>
        <div className="I-Filtros-Secciones-Admin">
          <FiltroNoticiasAdmin tituloFiltro={tituloFiltroSecciones} />
        </div>
      </div>
      {isSeccionNoticias && (
        <div className="CI-Pagina-Secciones-Admin-Noticias">
          <div className="I-Noticias-Secciones-Admin" onClick={() => editarNoticia()}>
            <TarjetaNoticias />
          </div>
        </div>
      )}
      {isSeccionGaleria && (
        <div className="CI-Pagina-Secciones-Galeria">
          <TarjetaGaleria></TarjetaGaleria>
        </div>
      )}
      {isSeccionTorneos && (
        <div className="CI-Pagina-Secciones-Torneos">
          <TarjetaTorneo></TarjetaTorneo>
          <TarjetaTorneo></TarjetaTorneo>
        </div>
      )}
    </div>
  );
};

export default PaginasSeccionesAdmin;
