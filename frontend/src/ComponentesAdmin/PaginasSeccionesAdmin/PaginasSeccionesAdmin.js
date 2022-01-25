import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';
import TarjetaGaleria from '../TarjetaGaleria/TarjetaGaleria';

import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import TarjetaVivo from '../TarjetaVivo/TarjetaVivo';

const PaginasSeccionesAdmin = ({
  funcionDeBotonSecciones = () => {
    console.log('No se envió función de botón');
  },
  tituloBotonSecciones = '',
  tituloFiltroSecciones,
  isSeccionNoticias = false,
  isSeccionGaleria = false,
  isSeccionVivo = false,
  isSeccionTorneos = false,
  mostrarFiltros = true,
  mostrarBotonNuevo = true,
  datosDeSeccion = [],
  escucharCambioFiltros = () => {
    console.log('Falta funcion para escuchar filtros');
  },
}) => {
  return (
    <div className="CP-Pagina-Secciones-Admin">
      {mostrarBotonNuevo && (
        <div className="CI-Pagina-Secciones-Admin-Cabecera">
          <div className="I-Boton-Secciones-Admin">
            <BotonLowa onClick={funcionDeBotonSecciones} tituloboton={tituloBotonSecciones} />
          </div>
          {mostrarFiltros && (
            <div className="I-Filtros-Secciones-Admin">
              <FiltroNoticiasAdmin
                tituloFiltro={tituloFiltroSecciones}
                escucharCambioFiltros={escucharCambioFiltros}
              />
            </div>
          )}
        </div>
      )}
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

      {isSeccionVivo && datosDeSeccion.urlVivo && (
        <div className="CI-Pagina-Secciones-Torneos">
          <TarjetaVivo vivo={datosDeSeccion} />
        </div>
      )}
    </div>
  );
};

export default PaginasSeccionesAdmin;
