import React from 'react';
import {useSelector} from 'react-redux';
import EditorEnfrentamientos from '../EditorEnfrentamientos/EditorEnfrentamientos';

import './NuevoEnfrentamiento.css';

const NuevoEnfrentamiento = () => {
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  return (
    <div className="CP-NuevoEnfrentamiento">
      <EditorEnfrentamientos
        categorias={categorias}
        subcategorias={subcategorias}
      ></EditorEnfrentamientos>
    </div>
  );
};
export default NuevoEnfrentamiento;
