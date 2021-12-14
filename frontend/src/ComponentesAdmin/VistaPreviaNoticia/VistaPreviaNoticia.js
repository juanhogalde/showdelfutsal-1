import React from 'react';

import NuevaNoticia from '../NuevaNoticia/NuevaNoticia';

import './VistaPreviaNoticia.css';

const VistaPreviaNoticia = () => {
  return (
    <div className="CP-VistaPreviaNoticia">
      <NuevaNoticia tituloBoton="Editar Noticia" isNueva={false} isConsulta={true}></NuevaNoticia>
    </div>
  );
};
export default VistaPreviaNoticia;
