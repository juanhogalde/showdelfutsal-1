import React from 'react';
import './EditarGaleria.css';
import NuevaGaleria from '../NuevaGaleria/NuevaGaleria';

import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cargando from '../Cargando/Cargando';

const EditarGaleria = () => {
  const {id} = useParams();
  console.log(id);

  const galeria = useSelector(state =>
    state.storeGalerias.galerias.find(galeria => galeria._id === id)
  );
  if (galeria) {
    return (
      <div className="CP-EditarGaleria">
        <NuevaGaleria datosParaEditar={galeria}></NuevaGaleria>
      </div>
    );
  } else {
    return (
      <div className="CP-EditarGaleria-Cargando">
        <Cargando></Cargando>
      </div>
    );
  }
};
export default EditarGaleria;
