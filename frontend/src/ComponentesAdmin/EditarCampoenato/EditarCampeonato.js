import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import useObtenerTorneo from '../../Hooks/useObtenerTorneo/useObtenerTorneo';
import Campeonato from '../Campeonato/Campeonato';
import Cargando from '../Cargando/Cargando';

export const EditarCampeonato = () => {
  const {id} = useParams();
  const {torneo} = useSelector(state => state.storeTorneos);

  if (Object.keys(torneo).length > 0) {
    return (
      <div className="CP-EditarGaleria">
        <Campeonato datosParaEditar={torneo} isEditarTorneoProps={true}></Campeonato>
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
