import React, {useLayoutEffect, useState} from 'react';
import './PaginaSecciones.css';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SeccionFixture from '../SeccionFixture/SeccionFixture';
import SeccionTablaDePosiciones from '../SeccionTablaDePosiciones/SeccionTablaDePosiciones';
import SubMenuSecciones from '../SubMenuSecciones/SubMenuSecciones';
import {useParams} from 'react-router';
import PieDepagina from '../PieDePagina/PieDepagina';
import {useDispatch, useSelector} from 'react-redux';
import Cargando from '../../ComponentesAdmin/Cargando/Cargando';
import {obtenerNoticiasParaSeccion} from '../../Redux/Noticias/AccionesNoticias';

const PaginaSecciones = () => {
  let {id} = useParams();
  const {isCargandoSeccion, noticasSeccion, isErrrorSeccion, subCategoriaSeleccionada} =
    useSelector(state => state.storeNoticias);
  const {subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const dispatch = useDispatch();

  const [isSeccionNoticias, setIsSeccionNoticias] = useState(true);
  const [isSeccionFixture, setIsSeccionFixture] = useState(false);
  const [isSeccionTabla, setIsSeccionTabla] = useState(false);
  useLayoutEffect(() => {
    if (id && subcategorias.length) {
      dispatch(obtenerNoticiasParaSeccion(id, subcategorias));
    }
  }, [id, dispatch, subcategorias]);

  const obtenerSeccion = respuesta => {
    switch (respuesta) {
      case 1:
        setIsSeccionFixture(true);
        setIsSeccionNoticias(false);
        setIsSeccionTabla(false);
        break;
      case 2:
        setIsSeccionTabla(true);
        setIsSeccionFixture(false);
        setIsSeccionNoticias(false);
        break;

      case 3:
        setIsSeccionNoticias(true);
        setIsSeccionTabla(false);
        setIsSeccionFixture(false);
        break;
      default:
    }
  };
  if (isCargandoSeccion) {
    return (
      <div>
        <Cargando />
      </div>
    );
  } else {
    return isErrrorSeccion ? (
      <div>
        <span>{isErrrorSeccion}</span>
      </div>
    ) : (
      <div className="CP-PaginaSecciones">
        <SubMenuSecciones obtenerSeccion={obtenerSeccion} subcategoria={subCategoriaSeleccionada} />

        <div className="CI-Cuerpo-PaginaSecciones">
          {isSeccionNoticias && (
            <div className="componente-SeccionNoticias">
              <SeccionNoticias
                subcategoriaNoticia={subCategoriaSeleccionada}
                noticias={noticasSeccion}
                isTitulo={false}
              ></SeccionNoticias>
            </div>
          )}
          {isSeccionFixture && (
            <div className="fondo-Tabla-Fixture">
              <SeccionFixture></SeccionFixture>
            </div>
          )}
          {isSeccionTabla && (
            <div className="fondo-Tabla-Fixture">
              <SeccionTablaDePosiciones></SeccionTablaDePosiciones>
            </div>
          )}
        </div>
        <PieDepagina></PieDepagina>
      </div>
    );
  }
};
export default PaginaSecciones;
