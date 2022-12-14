import React, {useLayoutEffect, useState} from 'react';
import './NuevaGaleria.css';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {MdDeleteForever} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import compresor from '../../ModulosExternos/Compresor';
import {
  agregarGaleria_accion,
  modificarGaleria_accion,
  volverPorDefectoAgregarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {useHistory, useParams} from 'react-router';
import {
  consultarEliminarImagen_accion,
  eliminarImagenExito_accion,
  eliminarImagen_accion,
  volverPorDefectoEliminarImagen_accion,
} from '../../Redux/Imagenes/AccionesImagenes';
import Selector from '../Selector/Selector';
import {BsPlusCircle} from 'react-icons/bs';

const NuevaGaleria = ({isEditarGaleria = false, datosParaEditar = {}}) => {
  const historialDeNavegacion = useHistory();
  const {id} = useParams();
  const dispatch = useDispatch();

  const {isAgregarGaleria} = useSelector(state => state.storeGalerias);
  const {isEliminarImagen} = useSelector(state => state.storeImagenes);
  const {categorias} = useSelector(state => state.sotreDatosIniciales);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();
  const [datosRequeridos, setDatosRequeridos] = useState(false);
  const [datosGaleria, setDatosGaleria] = useState({
    imagenes: [],
  });
  /* const [cantidadDeArchivos, setCantidadDeArchivos] = useState(0); */
  const [alertaComprimir, setAlertaComprimir] = useState({
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  });
  const [isErrorAlComprimir, setIsErrorAlComprimir] = useState(false);

  const escucharCambios = async (name, value) => {
    if (name === 'imagenes') {
      if (value.length > 0) {
        /* setCantidadDeArchivos(value.length + datosGaleria.imagenes.length); */
        setAlertaComprimir({
          tipo: 'cargando',
          mensaje: 'Comprimiendo Im??genes...',
          isCargando: true,
          isExito: false,
          isError: false,
        });
        let aux = {};
        Object.values(value).forEach(async img => {
          const respuesta = compresor(img, 0.6);
          const resultado = await respuesta
            .then(res => {
              setAlertaComprimir({
                tipo: 'success',
                mensaje: 'Im??genes comprimidas con ??xito.',
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
                mensaje: 'No se logr?? comprimir im??genes.',
                isCargando: false,
                isExito: false,
                isError: true,
              });
              setIsErrorAlComprimir(true);
            });

          /* aux = [...aux, ...datosGaleria.imagenes, resultado]; */
          aux = datosGaleria;
          aux.imagenes.push(resultado);
          setDatosGaleria(aux);
        });
      }
    } else {
      setDatosGaleria({...datosGaleria, [name]: value});
    }
  };

  const eliminarImagen = index => {
    var auxImagenes = [];
    if (isEditarGaleria) {
      if (isEliminarImagen.isNuevaImagen) {
        auxImagenes = datosGaleria.imagenes.slice();
        auxImagenes.splice(index, 1);
        console.log(auxImagenes);
        setDatosGaleria({...datosGaleria, imagenes: auxImagenes});
        dispatch(eliminarImagenExito_accion());
      } else {
        dispatch(eliminarImagen_accion(index, datosGaleria.imagenes[index]._id, id));
      }
    } else {
      dispatch(eliminarImagenExito_accion());
      auxImagenes = datosGaleria.imagenes.slice();
      auxImagenes.splice(index, 1);
      setDatosGaleria({...datosGaleria, imagenes: auxImagenes});
    }
  };

  const consultaEliminarImagen = (index, isNuevaImagen) => {
    dispatch(consultarEliminarImagen_accion(index, isNuevaImagen));
  };
  const respuestaDeAlertaEliminarImagen = respuesta => {
    if (respuesta) {
      if (isEliminarImagen.isExito) {
        dispatch(volverPorDefectoEliminarImagen_accion());
      }
      if (isEliminarImagen.isConsulta) {
        eliminarImagen(isEliminarImagen.dato);
      }
      if (isEliminarImagen.isError) {
        dispatch(volverPorDefectoEliminarImagen_accion());
      }
    } else {
      dispatch(volverPorDefectoEliminarImagen_accion());
    }
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

  const valoresPorDefectoNuevaGaleria = () => {
    dispatch(volverPorDefectoAgregarGaleria_accion());
    historialDeNavegacion.push('/Galer??as');
  };
  const RespuestaDeFaltaDatosRequeridos = () => {
    setDatosRequeridos(false);
  };
  const guardarDatosDeGaleria = () => {
    if (isEditarGaleria) {
      dispatch(
        modificarGaleria_accion({
          ...datosGaleria,
          idCategoria: categoriaSeleccionada.value,
          keyCategoria: categoriaSeleccionada.key,
        })
      );
    } else {
      if (datosGaleria.descripcion && categoriaSeleccionada) {
        dispatch(
          agregarGaleria_accion({
            ...datosGaleria,
            idCategoria: categoriaSeleccionada.value,
            keyCategoria: categoriaSeleccionada.key,
          })
        );
      } else {
        setDatosRequeridos(true);
      }
    }
  };
  useLayoutEffect(() => {
    if (isEditarGaleria) {
      setDatosGaleria({
        id: datosParaEditar._id,
        descripcion: datosParaEditar.tituloGaleria,
        imagenes: datosParaEditar.imagenesId,
      });
      var cateoria = categorias.find(element => element.value === datosParaEditar.idCategoria);
      setCategoriaSeleccionada(cateoria);
    }
    return () => {
      setDatosGaleria({imagenes: []});
    };
  }, [
    datosParaEditar._id,
    datosParaEditar.tituloGaleria,
    datosParaEditar.imagenesId,
    datosParaEditar.idCategoria,
    isEditarGaleria,
    categorias,
  ]);
  const escucharCategoria = respuestaCategoria => {
    setCategoriaSeleccionada(respuestaCategoria);
  };
  return (
    <div className="CP-AgregarImagenes">
      <InputLowa
        name="descripcion"
        placeholder="Ingrese T??tulo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosGaleria.descripcion ? datosGaleria.descripcion : ''}
      ></InputLowa>
      <Selector
        name="categoria"
        placeholder="Seleccione Categor??a"
        opcionSeleccionada={categoriaSeleccionada}
        selectorConIcono={<BsPlusCircle />}
        options={categorias ? categorias : []}
        onChange={escucharCategoria}
      ></Selector>
      <InputLowa
        name="imagenes"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
        multiple={true}
      ></InputLowa>

      {datosGaleria.imagenes.length > 0 && (
        <div className="CI-ListaImagnes">
          {Object.values(datosGaleria.imagenes).map((imagen, index) => {
            return (
              imagen && (
                <div key={index} className="filaListaImagenes">
                  <div className="CI-Imagen-Lista">
                    <ImagenAdmin
                      noticiaImagen={imagen instanceof Blob ? obtenerUrldeImagen(imagen) : imagen}
                      isTarjetaGaleria={true}
                    ></ImagenAdmin>
                  </div>
                  <div className="accionesFilaListaImagenes">
                    <MdDeleteForever
                      onClick={() =>
                        imagen instanceof Blob
                          ? consultaEliminarImagen(index, true)
                          : consultaEliminarImagen(index, false)
                      }
                      className="iconoAcci??n-ListaImagenes"
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}

      <BotonLowa
        tituloboton={isEditarGaleria ? 'Editar Galer??a' : 'Agregar Galer??a'}
        /* disabled={Object.keys(datosGaleria).length > 1 ? false : true} */
        onClick={() => guardarDatosDeGaleria()}
      ></BotonLowa>
      <Alertas
        mostrarSweet={datosRequeridos}
        tipoDeSweet="warning"
        subtitulo="Faltan datos requeridos"
        RespuestaDeSweet={RespuestaDeFaltaDatosRequeridos}
      />
      <Alertas
        tipoDeSweet={isEliminarImagen.tipo}
        mostrarSweet={
          isEliminarImagen.isConsulta ||
          isEliminarImagen.isCargando ||
          isEliminarImagen.isExito ||
          isEliminarImagen.isError
        }
        subtitulo={isEliminarImagen.mensaje}
        RespuestaDeSweet={respuestaDeAlertaEliminarImagen}
      />
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
