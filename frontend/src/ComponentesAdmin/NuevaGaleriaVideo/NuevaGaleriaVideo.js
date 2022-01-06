import React, {useEffect, useLayoutEffect, useState} from 'react';
import {BsFillCameraReelsFill} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {useHistory} from 'react-router';
import '../NuevaGaleriaVideo/NuevaGaleriaVideo.css';
import {MdDeleteForever} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {useParams} from 'react-router-dom';
import {
  editarGaleriaVideo_accion,
  eliminarVideo_accion,
  guardarGaleriaVideo_accion,
  volverPorDefectoAgregarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
const NuevaGaleriaVideo = () => {
  const {tipo} = useParams();
  const [videosCargados, setVideosCargados] = useState([]);
  const [isCamposVacios, setIsCamposVacios] = useState({enlaceUrl: true, descripcion: true});
  const history = useHistory();
  const dispatch = useDispatch();
  const {videoGaleriaEditar, isAgregarGaleria, isEditarGaleria} = useSelector(
    state => state.storeGalerias
  );
  const [datosGaleria, setDatosGaleria] = useState({});
  useEffect(() => {
    if (videosCargados.length) {
      const elemento = document.getElementById(`videoAgregado${videosCargados.length}`);
      elemento.scrollIntoView();
    }
    // setDatosGaleria({descripcion: ''});
  }, [videosCargados]);
  const escucharCambios = async (name, value) => {
    if (name === 'enlaceUrl') {
      setIsCamposVacios({...isCamposVacios, enlaceUrl: false});
    }
    if (name === 'descripcion') {
      setIsCamposVacios({...isCamposVacios, descripcion: false});
    }
    if (name === 'enlaceUrl') {
      if (value.indexOf('watch') !== -1) {
        let urlFinal;
        let posinicial = value.indexOf('?') + 3;
        if (value.indexOf('list') !== -1) {
          let posicionFinal = value.indexOf('&list');

          urlFinal = value.substr(posinicial, posicionFinal - posinicial);
        } else {
          urlFinal = value.substr(posinicial, value.length - 1);
        }
        setDatosGaleria({...datosGaleria, [name]: urlFinal, urlVideo: value});
      } else {
        let urlFinal;
        let posinicial = value.indexOf('be/') + 3;
        urlFinal = value.substr(posinicial, value.length - posinicial);
        console.log(urlFinal);
        setDatosGaleria({...datosGaleria, [name]: urlFinal, urlVideo: value});
      }
    } else {
      setDatosGaleria({...datosGaleria, [name]: value});
    }
  };
  const [advertenciaFaltanDatos, setAdvertenciaFaltanDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });
  useLayoutEffect(() => {
    if (videoGaleriaEditar.videosId) {
      setDatosGaleria({...videoGaleriaEditar, _id: videoGaleriaEditar._id});
      setVideosCargados(videoGaleriaEditar.videosId);
    } else {
      setVideosCargados([]);
      setDatosGaleria({});
    }
  }, [videoGaleriaEditar]);
  const AgregarVideo = () => {
    if (datosGaleria.enlaceUrl && datosGaleria.descripcion) {
      setVideosCargados([
        ...videosCargados,
        {fuente: datosGaleria.enlaceUrl, descripcion: datosGaleria.descripcion},
      ]);
      setDatosGaleria({...datosGaleria, enlaceUrl: '', descripcion: ''});
      setIsCamposVacios({enlaceUrl: true, descripcion: true});
    } else {
      setAdvertenciaFaltanDatos({
        mostrar: true,
        mensaje: 'Faltan datos requeridos para agregar videos',
        tipo: 'warning',
      });
    }
  };
  const guardarGaleria = tipo => {
    if (Object.values(datosGaleria).length) {
      var TresHoraMilisegundos = 1000 * 60 * 60 * 3;
      var fechaActual = new Date();
      var fechaMenosTresHoras = fechaActual.getTime() - TresHoraMilisegundos;
      if (tipo === 'editar') {
        dispatch(
          editarGaleriaVideo_accion(
            {...datosGaleria, fechaModificacion: fechaMenosTresHoras},
            videosCargados
          )
        );
      } else {
        if (videosCargados.length) {
          dispatch(
            guardarGaleriaVideo_accion(
              {...datosGaleria, fechaCarga: fechaMenosTresHoras},
              videosCargados
            )
          );
        } else {
          setAdvertenciaFaltanDatos({
            mostrar: true,
            mensaje: 'Faltan  agregar videos',
            tipo: 'warning',
          });
        }
      }
    } else {
      setAdvertenciaFaltanDatos({
        mostrar: true,
        mensaje: 'Faltan datos requeridos para agregar videos',
        tipo: 'warning',
      });
    }
  };
  const RespuestaDeAlerta = () => {
    setAdvertenciaFaltanDatos({mostrar: false, mensaje: '', tipo: ''});
  };
  const eliminarVideoCargado = index => {
    var copiaVideos = videosCargados.slice();
    var videoAEliminar = videosCargados.find(video => video._id === videosCargados[index]._id);

    if (videoAEliminar._id) {
      dispatch(eliminarVideo_accion(videoAEliminar));
    }
    copiaVideos.splice(index, 1);
    setVideosCargados(copiaVideos);
  };
  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefectoAgregarGaleria_accion());
    history.push('/Galerías');
  };
  return (
    <div className="CP-AgregarVideos">
      <InputLowa
        name="tituloGaleria"
        placeholder="Ingrese Título de galeria"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.tituloGaleria ? datosGaleria.tituloGaleria : ''}
      ></InputLowa>
      <InputLowa
        name="enlaceUrl"
        placeholder="Ingrese url de video"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={
          isCamposVacios.enlaceUrl
            ? ''
            : datosGaleria.urlVideo
            ? datosGaleria.urlVideo
            : datosGaleria.enlaceUrl
            ? datosGaleria.enlaceUrl
            : ''
        }
      ></InputLowa>
      <InputLowa
        name="descripcion"
        placeholder="Ingrese descripcion del video"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={
          isCamposVacios.descripcion ? '' : datosGaleria.descripcion ? datosGaleria.descripcion : ''
        }
      ></InputLowa>
      <div className="CP-Agregar-Un-Video" onClick={() => AgregarVideo()}>
        <BsFillCameraReelsFill
          className="CI-Agregar-Un-Video-Icono"
          size={28}
        ></BsFillCameraReelsFill>
        <h6>Agregar video</h6>
      </div>
      <BotonLowa
        onClick={() => guardarGaleria(tipo)}
        tituloboton={tipo === 'editar' ? 'Guardar Cambios' : 'Guardar Galeria'}
      />
      {/* <InputLowa
          name="imagenes"
          type="file"
          onChange={(name, value) => escucharCambios(name, value)}
          multiple={true}
        ></InputLowa> */}

      {videosCargados.length > 0 && (
        <div className="CI-ListaImagnes">
          {videosCargados.map((videos, index) => {
            return (
              videos && (
                <div key={index} className="CP-lista-videos" id={`videoAgregado${index + 1}`}>
                  <div className="CI-Video-Lista-Tarjeta">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videos.fuente}`}
                      title={videos.tituloVideo}
                      width="260"
                      height="200"
                    ></iframe>
                    <h5>{videos.tituloVideo}</h5>
                  </div>
                  <div className="accionesFilaListaImagenes">
                    <MdDeleteForever
                      onClick={() => eliminarVideoCargado(index)}
                      className="iconoAcción-ListaImagenes"
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}
      <Alertas
        mostrarSweet={advertenciaFaltanDatos.mostrar}
        subtitulo={advertenciaFaltanDatos.mensaje}
        tipoDeSweet={advertenciaFaltanDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlerta}
      />
      <Alertas
        mostrarSweet={isAgregarGaleria.isCargando || isEditarGaleria.isCargando}
        tipoDeSweet={isAgregarGaleria.tipo || isEditarGaleria.tipo}
        subtitulo={isAgregarGaleria.mensaje || isEditarGaleria.mensaje}
      />
      <Alertas
        mostrarSweet={
          isAgregarGaleria.isExito ||
          isAgregarGaleria.isError ||
          isEditarGaleria.isExito ||
          isEditarGaleria.isError
        }
        subtitulo={isAgregarGaleria.mensaje || isEditarGaleria.mensaje}
        tipoDeSweet={isAgregarGaleria.tipo || isEditarGaleria.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
    </div>
  );
};

export default NuevaGaleriaVideo;
