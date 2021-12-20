import React, {useState} from 'react';
import {BsFillCameraReelsFill} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import '../NuevaGaleriaVideo/NuevaGaleriaVideo.css';
import {MdDeleteForever} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {guardarGaleriaVideo_accion} from '../../Redux/Galerias/AccionesGalerias';
const NuevaGaleriaVideo = () => {
  const [videosCargados, setVideosCargados] = useState([]);
  const dispatch = useDispatch();
  const [datosGaleria, setDatosGaleria] = useState({});
  const escucharCambios = async (name, value) => {
    setDatosGaleria({...datosGaleria, [name]: value});
  };
  const [advertenciaFaltanDatos, setAdvertenciaFaltanDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });
  const AgregarVideo = () => {
    if (datosGaleria.enlaceUrl && datosGaleria.descripcion) {
      setVideosCargados([
        ...videosCargados,
        {fuente: datosGaleria.enlaceUrl, descripcion: datosGaleria.descripcion},
      ]);
    } else {
      setAdvertenciaFaltanDatos({
        mostrar: true,
        mensaje: 'Faltan datos requeridos para agregar videos',
        tipo: 'warning',
      });
    }
  };
  const guardarGaleria = () => {
    if (datosGaleria !== {}) {
      var TresHoraMilisegundos = 1000 * 60 * 60 * 3;
      var fechaActual = new Date();
      var fechaMenosTresHoras = fechaActual.getTime() - TresHoraMilisegundos;
      dispatch(
        guardarGaleriaVideo_accion(
          {...datosGaleria, fechaCarga: fechaMenosTresHoras},
          videosCargados
        )
      );
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
    let elementoEliminado = copiaVideos.splice(1, index);
    setVideosCargados(elementoEliminado);
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
        value={datosGaleria.enlaceUrl ? datosGaleria.enlaceUrl : ''}
      ></InputLowa>
      <InputLowa
        name="descripcion"
        placeholder="Ingrese descripcion del video"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.descripcion ? datosGaleria.descripcion : ''}
      ></InputLowa>
      <div className="CP-Agregar-Un-Video" onClick={() => AgregarVideo()}>
        <BsFillCameraReelsFill
          className="CI-Agregar-Un-Video-Icono"
          size={28}
        ></BsFillCameraReelsFill>
        <h6>Agregar video</h6>
      </div>
      <BotonLowa onClick={() => guardarGaleria()} tituloboton={'Guardar Galeria'} />
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
                <div key={index} className="CP-lista-videos">
                  <div className="CI-Video-Lista-Tarjeta">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videos.fuente}`}
                      title={videos.tituloVideo}
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
    </div>
  );
};

export default NuevaGaleriaVideo;
