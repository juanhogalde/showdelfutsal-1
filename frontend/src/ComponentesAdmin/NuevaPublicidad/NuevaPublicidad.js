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
import {
  guardarPublicidad,
  volverPorDefectoPublicidad_accion,
} from '../../Redux/Publicidades/AccionesPublicidades';

const NuevaPublicidad = () => {
  const history = useHistory();
  const {isPublicidad} = useSelector(state => state.storePublicidades);
  const [datosCargados, setdatosCargados] = useState({});
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    setdatosCargados({...datosCargados, [name]: value});
  };

  const GuardarNuevaPublicidad = () => {
    if (datosCargados.imagen && datosCargados.nombrePublicidad && datosCargados.ubicacion) {
      dispatch(guardarPublicidad(datosCargados));
    } else {
      alert('faltan datos requeridos');
    }
  };

  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefectoPublicidad_accion());
    history.push('/Publicidad');
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
      <InputLowa
        name="ancho"
        type="number"
        placeholder="Ingrese ancho de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="alto"
        type="number"
        placeholder="Ingrese alto de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="ubicacion"
        placeholder="Ingrese ubicacion de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="direccion"
        placeholder="Ingrese direccion de la publicidad..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="imagen"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      <BotonLowa
        tituloboton={'Guardar Publicidad'}
        onClick={() => GuardarNuevaPublicidad()}
      ></BotonLowa>
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
export default NuevaPublicidad;
