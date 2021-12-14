import React from 'react';
import NuevaNoticia from '../NuevaNoticia/NuevaNoticia';
import './EditarNoticia.css';

const EditarNoticia = () => {
  return (
    <div className="CP-EditarNoticia">
      <NuevaNoticia tituloBoton="Editar Noticia" isNueva={false}></NuevaNoticia>
    </div>
  );
};
export default EditarNoticia;
