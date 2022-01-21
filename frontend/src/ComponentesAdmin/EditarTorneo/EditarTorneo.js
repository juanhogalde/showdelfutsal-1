import React from 'react';
import './EditarTorneo.css';
import Cargando from '../Cargando/Cargando';
import {useParams} from 'react-router-dom';
import NuevoTorneo from '../NuevoTorneo/NuevoTorneo';
import {useSelector} from 'react-redux';

const EditarTorneo = () => {
  const {id} = useParams();
  const torneo = useSelector(state => state.storeTorneos.torneos.find(torneo => torneo._id === id));

  if (true) {
    return (
      <div className="CP-EditarGaleria">
        <NuevoTorneo datosParaEditar={torneo} isEditarTorneo={true}></NuevoTorneo>
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
