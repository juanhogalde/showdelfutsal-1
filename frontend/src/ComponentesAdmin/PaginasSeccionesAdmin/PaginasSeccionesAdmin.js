import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';
import TarjetaGaleria from '../TarjetaGaleria/TarjetaGaleria';

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
  datosDeSeccion = [],
  escucharCambioFiltros = () => {
    console.log('Falta funcion para escuchar filtros');
  },
}) => {
  return (
    <div className="CP-Pagina-Secciones-Admin">
      <div className="CI-Pagina-Secciones-Admin-Cabecera">
        <div className="I-Boton-Secciones-Admin">
          <BotonLowa onClick={funcionDeBotonSecciones} tituloboton={tituloBotonSecciones} />
        </div>
        <div className="I-Filtros-Secciones-Admin">
          <FiltroNoticiasAdmin
            tituloFiltro={tituloFiltroSecciones}
            escucharCambioFiltros={escucharCambioFiltros}
          />
        </div>
      </div>
      {isSeccionNoticias && (
        <div className="CI-Pagina-Secciones-Admin-Noticias">
          <div className="I-Noticias-Secciones-Admin">
            {datosDeSeccion.map(noticia => {
              return (
                <div key={noticia._id} className="I-Noticias-Secciones-Admin">
                  <TarjetaNoticias noticia={noticia} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isSeccionGaleria && (
        <div className="CI-Pagina-Secciones-Galeria">
          {datosDeSeccion.map((galeria, index) => {
            return <TarjetaGaleria key={index} galeria={galeria} />;
          })}
        </div>
      )}
      {isSeccionTorneos && (
        <div className="CI-Pagina-Secciones-Torneos">
          {datosDeSeccion.map((torneo, index) => {
            return <TarjetaTorneo key={index} torneo={torneo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PaginasSeccionesAdmin;
