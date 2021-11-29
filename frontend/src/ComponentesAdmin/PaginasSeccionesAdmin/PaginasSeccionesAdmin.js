import React, {useEffect, useLayoutEffect, useState} from 'react';
import './PaginasSeccionesAdmin.css';
import TarjetaNoticias from '../../ComponentesAdmin/TarjetaNoticias/TarjetaNoticias';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import FiltroNoticiasAdmin from '../../ComponentesAdmin/FiltroNoticiasAdmin/FiltroNoticiasAdmin';
import TarjetaGaleria from '../TarjetaGaleria/TarjetaGaleria';
import {useHistory} from 'react-router';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import {useSelector} from 'react-redux';

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
  const {imagenes} = useSelector(state => state.storeImagenes);

  const editarNoticia = () => {
    historialDeNavegacion.push(`/Noticia/Ver/${1234}`);
  };
  const [galeria, setGaleria] = useState({galeria1: [], galeria2: [], galeria3: []});

  useEffect(() => {
    if (isSeccionGaleria) {
      console.log('ejecutó');
      var auxGaleria1 = imagenes.filter(imagen => imagen.descripcion === 'La liga 2021');
      var auxGaleria2 = imagenes.filter(imagen => imagen.descripcion === 'Argentina vs Brasil');
      var auxGaleria3 = imagenes.filter(
        imagen => imagen.descripcion === 'Finales Femenino - Apertura 2021'
      );
      setGaleria({
        galeria1: [...auxGaleria1],
        galeria2: [...auxGaleria2],
        galeria3: [...auxGaleria3],
      });
    }
  }, []);
  console.log(Object.keys(galeria).length);
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
          {Object.values(galeria).map((imagenes, index) => {
            console.log(imagenes);
            return (
              <React.Fragment>
                {Object.keys(imagenes).length > 0 && (
                  <TarjetaGaleria
                    key={index}
                    datosTarjetaGaleria={imagenes}
                    tituloGaleria={imagenes[0].descripcion ? imagenes[0].descripcion : ''}
                  ></TarjetaGaleria>
                )}
              </React.Fragment>
            );
          })}
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
