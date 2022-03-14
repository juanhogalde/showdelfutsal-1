import React, {useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {useHistory} from 'react-router';
// import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './EditarPublicidad.css';
import {server} from '../../Entorno';
import {
  guardarPublicidadEditada,
  volverPorDefectoPublicidad_accion,
} from '../../Redux/Publicidades/AccionesPublicidades';
import Alertas from '../Alertas/Alertas';
import compresor from '../../ModulosExternos/Compresor';

const EditarPublicidad = () => {
  const [datosCargados, setdatosCargados] = useState({});
  const history = useHistory();
  const {publicidadSeleccionadaEdit, isPublicidad} = useSelector(state => state.storePublicidades);
  const [tamañoImagenCargada, setTamañoImagenCargada] = useState({alto: '', ancho: ''});

  const [advertenciaCargadoDeDatos, setAdvertenciaCargadoDeDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });

  useLayoutEffect(() => {
    setdatosCargados(publicidadSeleccionadaEdit);
  }, [setdatosCargados, publicidadSeleccionadaEdit]);
  const [alertaComprimir, setAlertaComprimir] = useState({
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  });
  const [isErrorAlComprimir, setIsErrorAlComprimir] = useState(false);
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    if (name === 'imagen') {
      if (value.length > 0) {
        /* setCantidadDeArchivos(value.length + datosGaleria.imagenes.length); */
        setAlertaComprimir({
          tipo: 'cargando',
          mensaje: 'Comprimiendo Imagen...',
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
                mensaje: 'Imagen comprimida con éxito.',
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
                mensaje: 'No se logró comprimir la imagen.',
                isCargando: false,
                isExito: false,
                isError: true,
              });
              setIsErrorAlComprimir(true);
            });

          aux = [...aux, resultado];

          setdatosCargados({...datosCargados, imagen: aux});
        });
      }
    } else {
      setdatosCargados({...datosCargados, [name]: value});
    }
  };
  const guardarPublicidad = () => {
    if (
      tamañoImagenCargada.alto <= datosCargados.idMedidas[0].alto &&
      tamañoImagenCargada.ancho <= datosCargados.idMedidas[0].ancho
    ) {
      dispatch(guardarPublicidadEditada({...datosCargados, _id: publicidadSeleccionadaEdit._id}));
    } else {
      setAdvertenciaCargadoDeDatos({
        mostrar: true,
        mensaje: 'verifique el tamaño de la imagen cargada',
        tipo: 'warning',
      });
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
      setdatosCargados({
        ...datosCargados,
        imagen: [],
      });
      setIsErrorAlComprimir(false);
    }
  };
  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefectoPublicidad_accion());
    history.push('/Publicidad');
  };
  const funcionObtenerTamanioImagen = img => {
    setTamañoImagenCargada({alto: img.current.naturalHeight, ancho: img.current.naturalWidth});
  };
  const RespuestaDeAlerta = () => {
    setAdvertenciaCargadoDeDatos({mostrar: false, mensaje: '', tipo: ''});
  };
  return (
    <div className="CP-EditarPublicidad">
      <h5>Publicidad Inicio</h5>
      {/* <div className="CI-DesactivarPublicidad">
        <p>Desactivar</p>
        <InputSwitchLowa
          name="isActiva"
          checked={datosCargados.isActiva ? datosCargados.isActiva : false}
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div> */}
      <InputLowa
        name="nombrePublicidad"
        ocultarIconoLateral={true}
        value={datosCargados.nombrePublicidad ? datosCargados.nombrePublicidad : ''}
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="medidaPublicidad"
        disabled={true}
        ocultarIconoLateral={true}
        value={datosCargados.idMedidas ? datosCargados.idMedidas[0].direccion : ''}
      ></InputLowa>
      <InputLowa
        name="medidaPublicidad"
        disabled={true}
        ocultarIconoLateral={true}
        value={
          datosCargados.idMedidas
            ? datosCargados.idMedidas[0].ubicacion +
              '->' +
              datosCargados.idMedidas[0].ancho +
              'x' +
              datosCargados.idMedidas[0].alto
            : ''
        }
      ></InputLowa>
      <InputLowa
        name="imagen"
        type="file"
        funcionObtenerTamanioImagen={funcionObtenerTamanioImagen}
        src={datosCargados.idImagen ? server + datosCargados.idImagen[0].fuente : ''}
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      <BotonLowa tituloboton={'Guardar Publicidad'} onClick={() => guardarPublicidad()}></BotonLowa>
      <Alertas
        mostrarSweet={isPublicidad.isMostrar}
        tipoDeSweet={isPublicidad.tipo}
        subtitulo={isPublicidad.mensaje}
      />
      <Alertas
        mostrarSweet={isPublicidad.isExito || isPublicidad.isError}
        subtitulo={isPublicidad.mensaje}
        tipoDeSweet={isPublicidad.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
      <Alertas
        mostrarSweet={advertenciaCargadoDeDatos.mostrar}
        subtitulo={advertenciaCargadoDeDatos.mensaje}
        tipoDeSweet={advertenciaCargadoDeDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlerta}
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
export default EditarPublicidad;
