import React, {useCallback, useLayoutEffect, useState} from 'react';
import './EditarTorneo.css';
import Cargando from '../Cargando/Cargando';
import {useParams} from 'react-router-dom';
import NuevoTorneo from '../NuevoTorneo/NuevoTorneo';

import {useDispatch, useSelector} from 'react-redux';
import {obtenerDatosDeTorneoParaEdicion_accion} from '../../Redux/Torneos/AccionesTorneos';
const EditarTorneo = () => {
  const {id} = useParams();
  const {torneo, torneos} = useSelector(state => state.storeTorneos);
  const dispatch = useDispatch();
  const [isTorneo, setIsTorneo] = useState(false);

  const cargaDeDatos = useCallback(async () => {
    let bandera = (await torneos.length) === 1;
    return bandera;
  }, [torneos]);

  useLayoutEffect(() => {
    cargaDeDatos();

    if (torneo) {
      if (Object.keys(torneo).length > 0) {
        setIsTorneo(true);
      } else {
        dispatch(obtenerDatosDeTorneoParaEdicion_accion(id));
      }
    } else {
      dispatch(obtenerDatosDeTorneoParaEdicion_accion(id));
    }
  }, [torneo, dispatch, id, cargaDeDatos]);

  if (isTorneo) {
    return (
      <div className="CP-EditarGaleria">
        <NuevoTorneo datosParaEditar={torneo} isEditarTorneoProps={true}></NuevoTorneo>
      </div>
    );
  } else {
    return (
      <div className="CP-EditarTorneo-Cargando">
        <Cargando></Cargando>
      </div>
    );
  }
};
export default EditarTorneo;
