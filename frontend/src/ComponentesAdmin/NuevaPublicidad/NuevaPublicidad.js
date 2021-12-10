import React, {useState} from 'react';
import './NuevaPublicidad.css';
// import Selector from '../Selector/Selector';
// import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
// import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {useHistory} from 'react-router';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import {BsPlusCircle} from 'react-icons/bs';
import {
  guardarPublicidad,
  volverPorDefectoPublicidad_accion,
} from '../../Redux/Publicidades/AccionesPublicidades';
import Selector from '../Selector/Selector';

const NuevaPublicidad = () => {
  const history = useHistory();
  const {isPublicidad} = useSelector(state => state.storePublicidades);
  const {medidasPublicidad} = useSelector(state => state.sotreDatosIniciales);
  const [medidasDePublicidad, setMedidasDePublicidad] = useState(null);
  const [tamañoImagenCargada, setTamañoImagenCargada] = useState({alto: '', ancho: ''});
  const [advertenciaCargadoDeDatos, setAdvertenciaCargadoDeDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });
  const [datosCargados, setdatosCargados] = useState({});
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    setdatosCargados({...datosCargados, [name]: value});
  };

  const GuardarNuevaPublicidad = () => {
    if (datosCargados.imagen && datosCargados.nombrePublicidad && medidasDePublicidad) {
      if (
        tamañoImagenCargada.alto <= medidasDePublicidad.alto &&
        tamañoImagenCargada.ancho <= medidasDePublicidad.ancho
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
  return (
    <div className="CP-NuevaPublicidad">
      <h5>Nueva Publicidad</h5>
      <div className="CI-DesactivarPublicidad">
        <p>Desactivar</p>
        <InputSwitchLowa
          name="isActiva"
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div>
      <InputLowa
        name="nombrePublicidad"
        placeholder="Ingrese nombre de publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <Selector
        name="idMedidas"
        placeholder="Seleccione medida y ubicación"
        selectorConIcono={<BsPlusCircle />}
        options={
          medidasPublicidad.length !== 0
            ? medidasPublicidad.filter(medida => medida.disponible)
            : []
        }
        onChange={setMedidasDePublicidad}
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
      <Alertas mostrarSweet={isPublicidad.isMostrar} tipoDeSweet={isPublicidad.tipo} />
      <Alertas
        mostrarSweet={
          isPublicidad.isExito || isPublicidad.isError || advertenciaCargadoDeDatos.mostrar
        }
        titulo={isPublicidad.mensaje || advertenciaCargadoDeDatos.mensaje}
        tipoDeSweet={isPublicidad.tipo || advertenciaCargadoDeDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
      <Alertas
        mostrarSweet={advertenciaCargadoDeDatos.mostrar}
        titulo={advertenciaCargadoDeDatos.mensaje}
        tipoDeSweet={advertenciaCargadoDeDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlerta}
      />
    </div>
  );
};
export default NuevaPublicidad;
