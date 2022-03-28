import React, {useLayoutEffect} from 'react';
import './EditarTorneo.css';
import Cargando from '../Cargando/Cargando';
import {useParams} from 'react-router-dom';
import NuevoTorneo from '../NuevoTorneo/NuevoTorneo';

import {useDispatch, useSelector} from 'react-redux';
import {
  obtenerDatosDeTorneoParaEdicion,
  obtenerDatosDeTorneoParaEdicionError_accion,
} from '../../Redux/Torneos/AccionesTorneos';
const EditarTorneo = () => {
  const {id} = useParams();
  const {torneoEditar, isCargandoTorneoEditar, isErrorTorneoEditar, torneos} = useSelector(
    state => state.storeTorneos
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (id && torneos.length && !torneoEditar) {
      let auxTorneo = torneos.find(torneo => torneo._id === id);
      if (auxTorneo) {
        dispatch(obtenerDatosDeTorneoParaEdicion(auxTorneo));
      } else {
        dispatch(
          obtenerDatosDeTorneoParaEdicionError_accion('No se encontro el torneo solicitado')
        );
      }
    }

    return () => {};
  }, [dispatch, id, torneos, torneoEditar]);

  if (isCargandoTorneoEditar) {
    return (
      <div className="CP-EditarTorneo-Cargando ">
        <Cargando></Cargando>
      </div>
    );
  } else {
    return isErrorTorneoEditar ? (
      <div className="CP-EditarTorneo-Cargando">
        <span>{isErrorTorneoEditar}</span>
      </div>
    ) : (
      <div className="CP-EditarGaleria">
        <NuevoTorneo datosParaEditar={torneoEditar} isEditarTorneoProps={true}></NuevoTorneo>
      </div>
    );
  }
};
export default EditarTorneo;
