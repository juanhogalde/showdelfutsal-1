import React from 'react';
import './EditarGaleria.css';
import NuevaGaleria from '../NuevaGaleria/NuevaGaleria';

import {useParams} from 'react-router-dom';

const EditarGaleria = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div className="CP-EditarGaleria">
      <NuevaGaleria></NuevaGaleria>
    </div>
  );
};
export default EditarGaleria;
