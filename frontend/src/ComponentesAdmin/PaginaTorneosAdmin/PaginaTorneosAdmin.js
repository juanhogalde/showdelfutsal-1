import React, {useLayoutEffect} from 'react';
import './PaginaTorneosAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {volverPorDefectoUnTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';

const PaginaTorneosAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {torneos, torneo} = useSelector(state => state.storeTorneos);
  const dispatch = useDispatch();

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Torneo/Nuevo');
    }
  };
  useLayoutEffect(() => {
    if (Object.keys(torneo).length > 0) {
      dispatch(volverPorDefectoUnTorneo_accion());
    }
    return () => {};
  }, [dispatch, torneo]);
  return (
    <div className="CP-PaginaTorneosAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones="Agregar"
        tituloFiltroSecciones="Todos los torneos"
        isSeccionTorneos={true}
        datosDeSeccion={torneos}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaTorneosAdmin;
