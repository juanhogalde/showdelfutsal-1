import React, {useState} from 'react';
import {BsFillCameraReelsFill} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import '../NuevaGaleriaVideo/NuevaGaleriaVideo.css';
import {MdDeleteForever} from 'react-icons/md';
const NuevaGaleriaVideo = () => {
  const [videosCargados, setVideosCargados] = useState([]);
  const [datosGaleria, setDatosGaleria] = useState({});
  const escucharCambios = async (name, value) => {
    setDatosGaleria({...datosGaleria, [name]: value});
  };
  const AgregarVideo = () => {
    if (datosGaleria.enlaceUrl && datosGaleria.tituloVideo && datosGaleria.descripcion) {
    }
    setVideosCargados([
      ...videosCargados,
      {fuente: datosGaleria.enlaceUrl, tituloVideo: datosGaleria.tituloVideo},
    ]);
  };
  const eliminarVideoCargado = index => {
    console.log(index);
    console.log(videosCargados);
    var copiaVideos = videosCargados.slice();
    console.log(copiaVideos);
    let elementoEliminado = copiaVideos.splice(1, index);
    console.log(elementoEliminado);
    setVideosCargados(elementoEliminado);
  };
  return (
    <div className="CP-AgregarVideos">
      <InputLowa
        name="descripcion"
        placeholder="Ingrese Título de galeria"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.descripcion ? datosGaleria.descripcion : ''}
      ></InputLowa>
      <InputLowa
        name="enlaceUrl"
        placeholder="Ingrese url de video"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.enlaceUrl ? datosGaleria.enlaceUrl : ''}
      ></InputLowa>
      <InputLowa
        name="tituloVideo"
        placeholder="Ingrese titulo de video"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.tituloVideo ? datosGaleria.tituloVideo : ''}
      ></InputLowa>
      <div className="CP-Agregar-Un-Video" onClick={() => AgregarVideo()}>
        <BsFillCameraReelsFill
          className="CI-Agregar-Un-Video-Icono"
          size={28}
        ></BsFillCameraReelsFill>
        <h6>Agregar video</h6>
      </div>
      <BotonLowa tituloboton={'Guardar Galeria'} />
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
    </div>
  );
};

export default NuevaGaleriaVideo;
