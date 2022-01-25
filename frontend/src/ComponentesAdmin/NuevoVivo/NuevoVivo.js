import React, {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {
  agregarVivo_accion,
  EditarVivo_accion,
  volverDatosPorfecto_accion,
} from '../../Redux/Vivo/AccionesVivo';
import Alertas from '../Alertas/Alertas';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './NuevoVivo.css';
const NuevoVivo = (vivoRecibido = {}, tipoOperacion = '') => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {tipo} = useParams();

  const {isVivo, vivo} = useSelector(state => state.storeVivo);
  const [datosVivo, setDatosVivo] = useState({isActivo: true});
  const [advertenciaFaltanDatos, setAdvertenciaFaltanDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });
  const escucharCambios = async (name, value) => {
    setDatosVivo({...datosVivo, [name]: value});
  };
  const RespuestaDeAlerta = () => {
    setAdvertenciaFaltanDatos({mostrar: false, mensaje: '', tipo: ''});
  };
  const guardarVivo = tipo => {
    if (datosVivo.nombreVivo && datosVivo.urlVivo && datosVivo.urlChat) {
      if (tipo === 'nuevo') {
        dispatch(agregarVivo_accion(datosVivo));
      } else {
        dispatch(EditarVivo_accion(datosVivo));
      }
    } else {
      setAdvertenciaFaltanDatos({
        mostrar: true,
        mensaje: 'Faltan datos requeridos para agregar el vivo',
        tipo: 'warning',
      });
    }
  };
  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverDatosPorfecto_accion());
    history.push('/Vivo');
  };
  useLayoutEffect(() => {
    if (tipo === 'editar') {
      if (vivoRecibido.urlVivo) {
        setDatosVivo(vivoRecibido);
      } else {
        setDatosVivo(vivo);
      }
    }
  }, [vivo, vivoRecibido, tipo]);
  return (
    <div className="CP-AgregarVivo">
      <div className="CI-DesactivarVivo">
        <p>Desactivar/Activar</p>
        <InputSwitchLowa
          checked={datosVivo.isActivo ? datosVivo.isActivo : datosVivo.isActivo}
          name="isActivo"
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div>

      <InputLowa
        name="nombreVivo"
        placeholder="Ingrese nombre del vivo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        ocultarIconoLateral={true}
        value={datosVivo.nombreVivo ? datosVivo.nombreVivo : ''}
      ></InputLowa>
      <InputLowa
        name="urlVivo"
        placeholder="Ingrese enlace del vivo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        ocultarIconoLateral={true}
        value={datosVivo.urlVivo ? datosVivo.urlVivo : ''}
      ></InputLowa>
      <InputLowa
        name="urlChat"
        placeholder="Ingrese enlace del chat"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        ocultarIconoLateral={true}
        value={datosVivo.urlChat ? datosVivo.urlChat : ''}
      ></InputLowa>
      <BotonLowa
        onClick={() => guardarVivo(tipo)}
        tituloboton={tipo === 'editar' ? 'Editar vivo' : 'Guardar vivo'}
      />
      <Alertas
        mostrarSweet={advertenciaFaltanDatos.mostrar}
        subtitulo={advertenciaFaltanDatos.mensaje}
        tipoDeSweet={advertenciaFaltanDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlerta}
      />
      <Alertas
        mostrarSweet={
          isVivo.isMostrar ||
          isVivo.isExito ||
          isVivo.isError ||
          isVivo.isEditada ||
          isVivo.isEliminado
        }
        subtitulo={isVivo.mensaje}
        tipoDeSweet={isVivo.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
    </div>
  );
};

export default NuevoVivo;
