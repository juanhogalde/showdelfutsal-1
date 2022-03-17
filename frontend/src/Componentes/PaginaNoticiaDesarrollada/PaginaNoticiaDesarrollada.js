import React, {useEffect, useLayoutEffect, useState} from 'react';
import './PaginaNoticiaDesarrollada.css';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import publicidadLarga from '../../Static/Img/anuncio_larga.jpg';
import publicidadCorta from '../../Static/Img/anuncio_corta.jpg';
import {useDispatch, useSelector} from 'react-redux';
import Animaciones from '../Animaciones/Animaciones';
import PieDepagina from '../PieDePagina/PieDepagina';
import {server} from '../../Entorno';
import {useParams} from 'react-router';
import {
  obtenerNoticiaSeleccionada,
  cargandoObtenerNoticiaSeleccionada_accion,
} from '../../Redux/Noticias/AccionesNoticias';
import Cargando from '../../ComponentesAdmin/Cargando/Cargando';

const PaginaNoticiaDesarrollada = ({tituloSeccionNoticias = 'Noticia Desarrollada'}) => {
  const userAgent = navigator.userAgent;
  let {id} = useParams();
  const dispatch = useDispatch();
  const isMobileIPhone = userAgent.indexOf('iPhone');
  const isMobileAndroid = userAgent.indexOf('Android');
  const [publicaciones, setPublicaciones] = useState(null);
  const {noticiaDesarrolladaError, noticiaDesarrolada, cargandoNoticiaDesarrollada} = useSelector(
    state => state.storeNoticias
  );
  const {publicidades} = useSelector(state => state.storePublicidades);
  useEffect(() => {
    const elemento = document.getElementById('noticiaDesarrollada');
    if (elemento) {
      elemento.scrollIntoView();
    }
    let publicidadCuardadaDerecha;
    let publicidadCuardadaDerechaInferior;
    let publicidadHorizontalInferior;
    publicidades.forEach(publicidad => {
      switch (publicidad.idMedidas[0].keyMedidas) {
        case 4:
          if (publicidad.isActiva) {
            publicidadCuardadaDerecha = publicidad;
          }
          break;
        case 7:
          if (publicidad.isActiva) {
            publicidadHorizontalInferior = publicidad;
          }
          break;
        case 13:
          if (publicidad.isActiva) {
            publicidadCuardadaDerechaInferior = publicidad;
          }
          break;
        default:
          break;
      }
    });
    setPublicaciones({
      publicidadCuardadaDerecha: publicidadCuardadaDerecha,
      publicidadHorizontalInferior: publicidadHorizontalInferior,
      publicidadCuardadaDerechaInferior: publicidadCuardadaDerechaInferior,
    });
  }, [publicidades]);
  const enfocarNoticia = () => {
    const elementoEnfocar = document.getElementById('noticiaDesarrollada');
    elementoEnfocar.scrollIntoView();
  };
  useLayoutEffect(() => {
    if (id && !noticiaDesarrolada) {
      dispatch(obtenerNoticiaSeleccionada(id));
    }
    return () => {};
  }, [id, noticiaDesarrolada, dispatch]);
  useLayoutEffect(() => {
    return () => {
      dispatch(cargandoObtenerNoticiaSeleccionada_accion());
    };
  }, [dispatch]);
  if (cargandoNoticiaDesarrollada) {
    return (
      <div className="ContenedorCargandoNoticiaDesarrollada">
        <Cargando />
      </div>
    );
  } else {
    return noticiaDesarrolladaError ? (
      <div className="ContenedorCargandoNoticiaDesarrollada">
        <span>{noticiaDesarrolladaError}</span>
      </div>
    ) : (
      <div
        id="noticiaDesarrollada"
        className="LI-ND-Noticia-Desarrollada Fondo-seccion-noticia-desarrollada"
      >
        <Animaciones isAlineado={true} orientacion={'derecha'} />
        <div className="CP-ND-Noticias">
          <div className="CI-ND-Noticia-general">
            <div className="I-Noticia-desarrollada-Componente">
              <NoticiaDesarrollada datosModelado={noticiaDesarrolada} />
            </div>
          </div>

          <div className="I-ND-Publicidad-corta">
            <img
              alt=""
              src={
                publicaciones
                  ? publicaciones.publicidadCuardadaDerecha
                    ? server + publicaciones.publicidadCuardadaDerecha.idImagen[0].fuente
                    : publicidadCorta
                  : publicidadCorta
              }
            ></img>
          </div>
          <div className="I-ND-Noticia-Componente-Slider">
            {isMobileAndroid !== -1 || isMobileIPhone !== -1 ? (
              <SliderNoticias
                cantidadDeElementos={6}
                isVertical={true}
                enfocarNoticia={enfocarNoticia}
                categoriaNoticias={
                  noticiaDesarrolada.keyCategoria ? noticiaDesarrolada.keyCategoria : -1
                }
              />
            ) : (
              <SliderNoticias
                cantidadDeElementos={1}
                isVertical={true}
                enfocarNoticia={enfocarNoticia}
                categoriaNoticias={
                  noticiaDesarrolada.keyCategoria ? noticiaDesarrolada.keyCategoria : -1
                }
              />
            )}
          </div>
          <div className="I-ND-Publicidad-corta-inferior">
            <img
              alt=""
              src={
                publicaciones?.publicidadCuardadaDerechaInferior
                  ? server + publicaciones.publicidadCuardadaDerechaInferior.idImagen[0].fuente
                  : publicidadCorta
              }
            ></img>
          </div>

          <div className="CI-ND-Publicidad">
            <img
              alt=""
              src={
                publicaciones
                  ? publicaciones.publicidadHorizontalInferior
                    ? server + publicaciones.publicidadHorizontalInferior.idImagen[0].fuente
                    : publicidadLarga
                  : publicidadLarga
              }
            ></img>
          </div>
        </div>
        <PieDepagina></PieDepagina>
      </div>
    );
  }
};

export default PaginaNoticiaDesarrollada;
