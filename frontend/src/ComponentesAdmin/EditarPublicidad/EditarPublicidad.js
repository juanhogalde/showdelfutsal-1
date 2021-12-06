import React, {useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {useHistory} from 'react-router';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './EditarPublicidad.css';
import {urlImagenes} from '../../urlImagenes';
import {
  guardarPublicidadEditada,
  volverPorDefectoPublicidad_accion,
} from '../../Redux/Publicidades/AccionesPublicidades';
import Alertas from '../Alertas/Alertas';

const EditarPublicidad = () => {
  const [datosCargados, setdatosCargados] = useState({});
  const history = useHistory();
  const {publicidadSeleccionadaEdit, isPublicidad} = useSelector(state => state.storePublicidades);
  useLayoutEffect(() => {
    setdatosCargados(publicidadSeleccionadaEdit);
  }, [setdatosCargados, publicidadSeleccionadaEdit]);

  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    setdatosCargados({...datosCargados, [name]: value});
  };
  const guardarPublicidad = () => {
    dispatch(guardarPublicidadEditada({...datosCargados, _id: publicidadSeleccionadaEdit._id}));
  };
  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefectoPublicidad_accion());
    history.push('/Publicidad');
  };
  return (
    <div className="CP-EditarPublicidad">
      <h5>Publicidad Inicio</h5>
      <div className="CI-DesactivarPublicidad">
        <p>Desactivar</p>
        <InputSwitchLowa
          name="isActiva"
          checked={datosCargados.isActiva ? datosCargados.isActiva : false}
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div>
      <InputLowa
        name="nombrePublicidad"
        value={datosCargados.nombrePublicidad ? datosCargados.nombrePublicidad : ''}
        placeholder="Ingrese nombre de publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="ancho"
        type="number"
        value={datosCargados.ancho ? datosCargados.ancho : ''}
        placeholder="Ingrese ancho de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="alto"
        type="number"
        value={datosCargados.alto ? datosCargados.alto : ''}
        placeholder="Ingrese alto de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="ubicacion"
        value={datosCargados.ubicacion ? datosCargados.ubicacion : ''}
        placeholder="Ingrese ubicacion de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="direccion"
        value={datosCargados.direccion ? datosCargados.direccion : ''}
        placeholder="Ingrese direccion de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="imagen"
        type="file"
        src={datosCargados.idImagen ? urlImagenes + datosCargados.idImagen[0].fuente : ''}
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      <BotonLowa tituloboton={'Guardar Publicidad'} onClick={() => guardarPublicidad()}></BotonLowa>
      <Alertas mostrarSweet={isPublicidad.isMostrar} tipoDeSweet={isPublicidad.tipo} />
      <Alertas
        mostrarSweet={isPublicidad.isExito || isPublicidad.isError}
        titulo={isPublicidad.mensaje}
        tipoDeSweet={isPublicidad.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
    </div>
  );
};
export default EditarPublicidad;
