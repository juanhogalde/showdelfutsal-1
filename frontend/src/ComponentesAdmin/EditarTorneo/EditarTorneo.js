import React from 'react';
import './EditarTorneo.css';
import Cargando from '../Cargando/Cargando';
import {useParams} from 'react-router-dom';
import NuevoTorneo from '../NuevoTorneo/NuevoTorneo';
/* import {useDispatch, useSelector} from 'react-redux';
import {cargarDatosDeTorneoParaEdicion_accion} from '../../Redux/Torneos/AccionesTorneos'; */
import useObtenerTorneo from '../../Hooks/useObtenerTorneo/useObtenerTorneo';

import {useSelector} from 'react-redux';
const EditarTorneo = () => {
  const {id} = useParams();
  const {torneo} = useSelector(state => state.storeTorneos);

  if (useObtenerTorneo(id)) {
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
