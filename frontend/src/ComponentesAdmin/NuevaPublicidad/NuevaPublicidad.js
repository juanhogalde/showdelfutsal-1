import React, {useLayoutEffect, useState} from 'react';
import './NuevaPublicidad.css';
// import Selector from '../Selector/Selector';
// import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
// import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {useHistory} from 'react-router';
// import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import {BsPlusCircle} from 'react-icons/bs';
import {
  guardarPublicidad,
  obtenerMedidasPublicidad,
  volverPorDefectoPublicidad_accion,
} from '../../Redux/Publicidades/AccionesPublicidades';
import Selector from '../Selector/Selector';
import compresor from '../../ModulosExternos/Compresor';
import Cargando from '../Cargando/Cargando';

const NuevaPublicidad = () => {
  const history = useHistory();
  const {isPublicidad,isCargandoComponenteNuevaPublicidad,isErrorComponenteNuevaPublicidad,medidasParaNuevaPublicidad} = useSelector(state => state.storePublicidades);
  const [medidasDePublicidad, setMedidasDePublicidad] = useState(null);
  const [tamañoImagenCargada, setTamañoImagenCargada] = useState({alto: '', ancho: ''});
  const [advertenciaCargadoDeDatos, setAdvertenciaCargadoDeDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });
  const [alertaComprimir, setAlertaComprimir] = useState({
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  });
  const [isErrorAlComprimir, setIsErrorAlComprimir] = useState(false);
  const [datosCargados, setdatosCargados] = useState({isActiva: true});
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
  const GuardarNuevaPublicidad = () => {
    if (datosCargados.imagen && datosCargados.nombrePublicidad && medidasDePublicidad) {
      if (
        tamañoImagenCargada.alto === medidasDePublicidad.alto &&
        tamañoImagenCargada.ancho === medidasDePublicidad.ancho
      ) {
        dispatch(guardarPublicidad({...datosCargados, idMedidas: medidasDePublicidad.value}));
      } else {
        setAdvertenciaCargadoDeDatos({
          mostrar: true,
          mensaje: 'verifique el tamaño de la imagen cargada',
          tipo: 'warning',
        });
      }
    } else {
      setAdvertenciaCargadoDeDatos({
        mostrar: true,
        mensaje: 'faltan datos requeridos',
        tipo: 'warning',
      });
    }
  };

  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefectoPublicidad_accion());
    history.push('/Publicidad');
  };
  const RespuestaDeAlerta = () => {
    setAdvertenciaCargadoDeDatos({mostrar: false, mensaje: '', tipo: ''});
  };
  const funcionObtenerTamanioImagen = img => {
    setTamañoImagenCargada({alto: img.current.naturalHeight, ancho: img.current.naturalWidth});
  };
  useLayoutEffect(() => {
   if(!medidasParaNuevaPublicidad){
     dispatch(obtenerMedidasPublicidad())
   }
    return () => {
    };
  }, [medidasParaNuevaPublicidad,dispatch])
  if(isCargandoComponenteNuevaPublicidad){
    return(
      <Cargando/>
    )
  }
  else{
    return (
      isErrorComponenteNuevaPublicidad? <span>{isErrorComponenteNuevaPublicidad}</span>:
      <div className="CP-NuevaPublicidad">
        <h5>Nueva Publicidad</h5>
        <InputLowa
          name="nombrePublicidad"
          placeholder="Ingrese nombre de publicidad..."
          onChange={e => escucharCambios(e.target.name, e.target.value)}
        ></InputLowa>
        <Selector
          name="idMedidas"
          placeholder="Seleccione medida y ubicación"
          selectorConIcono={<BsPlusCircle />}
          options={ medidasParaNuevaPublicidad}
          onChange={setMedidasDePublicidad}
          noOptionsMessage={"No hay espacio publicitario disponible"}
        ></Selector>
        <InputLowa
          name="imagen"
          type="file"
          funcionObtenerTamanioImagen={funcionObtenerTamanioImagen}
          onChange={(name, value) => escucharCambios(name, value)}
        ></InputLowa>
        <BotonLowa
          tituloboton={'Guardar Publicidad'}
          onClick={() => GuardarNuevaPublicidad()}
        ></BotonLowa>
        <Alertas
          mostrarSweet={isPublicidad.isMostrar}
          tipoDeSweet={isPublicidad.tipo}
          subtitulo={isPublicidad.mensaje}
        />
        <Alertas
          mostrarSweet={
            isPublicidad.isExito || isPublicidad.isError || advertenciaCargadoDeDatos.mostrar
          }
          subtitulo={isPublicidad.mensaje || advertenciaCargadoDeDatos.mensaje}
          tipoDeSweet={isPublicidad.tipo || advertenciaCargadoDeDatos.tipo}
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
  }
  
};
export default NuevaPublicidad;
