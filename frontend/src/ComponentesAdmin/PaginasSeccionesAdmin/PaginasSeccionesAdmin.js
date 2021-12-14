import React from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';
import TarjetaGaleria from '../TarjetaGaleria/TarjetaGaleria';
import {useHistory} from 'react-router';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import {useSelector, useDispatch} from 'react-redux';
import {guardarNoticiaParaEditar_accion} from '../../Redux/Noticias/AccionesNoticias';

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
  const dispatch = useDispatch();
  const {noticias} = useSelector(state => state.storeNoticias);
  const editarNoticia = noticia => {
    dispatch(guardarNoticiaParaEditar_accion(noticia));
    historialDeNavegacion.push(`/Noticia/Editar`);
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
          <div className="I-Noticias-Secciones-Admin">
            {noticias.map(noticia => {
              return (
                <div
                  key={noticia._id}
                  className="I-Noticias-Secciones-Admin"
                  onClick={() => editarNoticia(noticia)}
                >
                  <TarjetaNoticias noticia={noticia} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {isSeccionGaleria && (
        <div className="CI-Pagina-Secciones-Galeria">
          <TarjetaGaleria />
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
