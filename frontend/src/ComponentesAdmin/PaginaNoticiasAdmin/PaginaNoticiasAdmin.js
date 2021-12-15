import React, {useLayoutEffect, useState} from 'react';
import './PaginaNoticiasAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';
import {useSelector} from 'react-redux';

const PaginaNoticiasAdmin = () => {
  const historialDeNavegacion = useHistory();
  const [noticiasFiltradas, setNoticiasFiltradas] = useState();
  const {noticias} = useSelector(state => state.storeNoticias);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState('');
  const {categorias} = useSelector(state => state.sotreDatosIniciales);
  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Noticia/Nueva');
    }
  };
  useLayoutEffect(() => {
    setNoticiasFiltradas(noticias);
    setFiltroSeleccionado({label: 'Todas las noticias', key: -1, index: -1});
  }, [setNoticiasFiltradas, noticias, setFiltroSeleccionado]);
  const escucharCambioFiltros = () => {
    if (filtroSeleccionado.index === -1) {
      let indice = filtroSeleccionado.index + 1;
      setFiltroSeleccionado({...categorias[indice], index: indice});
      setNoticiasFiltradas(
        noticias.filter(noticia => noticia.keyCategoria === categorias[indice].key)
      );
    } else {
      if (filtroSeleccionado.index === categorias.length - 1) {
        setFiltroSeleccionado({label: 'Todas las noticias', key: -1, index: -1});
        setNoticiasFiltradas([...noticias]);
      } else {
        let indice = filtroSeleccionado.index + 1;
        setFiltroSeleccionado({...categorias[indice], index: indice});
        setNoticiasFiltradas(
          noticias.filter(noticia => noticia.keyCategoria === categorias[indice].key)
        );
      }
    }
  };
  return (
    <div className="CP-PaginaNoticiasAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones={'Agregar'}
        escucharCambioFiltros={() => {
          escucharCambioFiltros();
        }}
        tituloFiltroSecciones={filtroSeleccionado.label}
        isSeccionNoticias={true}
        datosDeSeccion={noticiasFiltradas}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaNoticiasAdmin;
