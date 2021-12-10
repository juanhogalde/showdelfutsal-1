import React, {useState} from 'react';
import './NuevaGaleria.css';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {MdDeleteForever} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';

import Alertas from '../Alertas/Alertas';
import compresor from '../../ModulosExternos/Compresor';
import {
  agregarGaleria_accion,
  volverPorDefectoAgregarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {useHistory} from 'react-router';

const NuevaGaleria = ({datosParaEditar = {}}) => {
  const historialDeNavegacion = useHistory();

  const {isAgregarGaleria} = useSelector(state => state.storeGalerias);
  const [datosGaleria, setDatosGaleria] = useState({
    imagenes: [],
  });
  const [cantidadDeArchivos, setCantidadDeArchivos] = useState(0);
  const [alertaComprimir, setAlertaComprimir] = useState({
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  });
  const [isErrorAlComprimir, setIsErrorAlComprimir] = useState(false);
  const dispatch = useDispatch();

  const escucharCambios = async (name, value) => {
    if (name === 'imagenes') {
      if (value.length > 0) {
        setCantidadDeArchivos(value.length + datosGaleria.imagenes.length);
        setAlertaComprimir({
          tipo: 'cargando',
          mensaje: 'Comprimiendo Imágenes...',
          isCargando: true,
          isExito: false,
          isError: false,
        });
        let aux = [];
        Object.values(value).forEach(async img => {
          const respuesta = compresor(img);
          const resultado = await respuesta
            .then(res => {
              setAlertaComprimir({
                tipo: 'success',
                mensaje: 'Imágenes comprimidas con éxito.',
                isCargando: false,
                isExito: true,
                isError: false,
              });
              return res;
            })
            .catch(error => {
              console.log(error);
              setAlertaComprimir({
                tipo: 'error',
                mensaje: 'No se logró comprimir imágenes.',
                isCargando: false,
                isExito: false,
                isError: true,
              });
              setIsErrorAlComprimir(true);
            });

          aux = [...aux, ...datosGaleria.imagenes, resultado];

          setDatosGaleria({...datosGaleria, imagenes: aux});
        });
      }
    } else {
      setDatosGaleria({...datosGaleria, [name]: value});
    }
  };

  const eliminarImagen = index => {
    var auxImagenes = [];
    auxImagenes = datosGaleria.imagenes.slice();
    auxImagenes.splice(index, 1);
    console.log(auxImagenes);
    setDatosGaleria({...datosGaleria, imagenes: auxImagenes});
  };

  const guardarNuevaGaleria = () => {
    dispatch(agregarGaleria_accion(datosGaleria));
  };

  const valoresPorDefectoNuevaGaleria = () => {
    dispatch(volverPorDefectoAgregarGaleria_accion());
    historialDeNavegacion.push('/Galerías');
  };

  const respuestaDeSweetAlComprimir = respuesta => {
    if (respuesta) {
      setAlertaComprimir({
        tipo: '',
        mensaje: '',
        isCargando: false,
        isExito: false,
        isError: false,
      });
    }
    if (isErrorAlComprimir) {
      setDatosGaleria({
        imagenes: [],
      });
      setIsErrorAlComprimir(false);
    }
  };

  const obtenerUrldeImagen = img => {
    let auxUrlImg = URL.createObjectURL(img);
    return auxUrlImg;
  };

  return (
    <div className="CP-AgregarImagenes">
      <InputLowa
        name="descripcion"
        placeholder="Ingrese Título"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosParaEditar ? datosParaEditar.tituloGaleria : ''}
      ></InputLowa>
      <InputLowa
        name="imagenes"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
        multiple={true}
      ></InputLowa>

      {datosGaleria.imagenes.length === cantidadDeArchivos && (
        <div className="CI-ListaImagnes">
          {Object.values(datosGaleria.imagenes).map((imagen, index) => {
            return (
              imagen && (
                <div key={index} className="filaListaImagenes">
                  <div className="CI-Imagen-Lista">
                    <img alt="" className="nuevaImagenLista" src={obtenerUrldeImagen(imagen)}></img>
                  </div>
                  <div className="accionesFilaListaImagenes">
                    <MdDeleteForever
                      onClick={() => eliminarImagen(index)}
                      className="iconoAcción-ListaImagenes"
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}

      {Object.keys(datosParaEditar).length > 0 && (
        <div className="CI-ListaImagnes">
          {Object.values(datosParaEditar.imagenesId).map((imagen, index) => {
            return (
              imagen && (
                <div key={index} className="filaListaImagenes">
                  <div className="CI-Imagen-Lista">
                    <ImagenAdmin noticiaImagen={imagen} isTarjetaGaleria={true}></ImagenAdmin>
                  </div>
                  <div className="accionesFilaListaImagenes">
                    <MdDeleteForever
                      onClick={() => eliminarImagen(index)}
                      className="iconoAcción-ListaImagenes"
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}

      <BotonLowa
        tituloboton="Agregar Imágenes"
        disabled={Object.keys(datosGaleria).length > 1 ? false : true}
        onClick={() => guardarNuevaGaleria()}
      ></BotonLowa>
      <Alertas
        tipoDeSweet={isAgregarGaleria.tipo}
        mostrarSweet={
          isAgregarGaleria.isCargando || isAgregarGaleria.isExito || isAgregarGaleria.isError
        }
        RespuestaDeSweet={valoresPorDefectoNuevaGaleria}
        subtitulo={isAgregarGaleria.mensaje}
      />
      <Alertas
        tipoDeSweet={alertaComprimir.tipo}
        mostrarSweet={
          alertaComprimir.isCargando || alertaComprimir.isExito || alertaComprimir.isError
        }
        subtitulo={alertaComprimir.mensaje}
        RespuestaDeSweet={respuestaDeSweetAlComprimir}
      ></Alertas>
    </div>
  );
};
export default NuevaGaleria;
