import React from 'react';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import '../Vivo/Vivo.css';
const Vivo = ({
  etiquetaMarcador = 'Etiqueta - de - Vivo',
  video = {
    fuente: '',
  },
}) => {
  return (
    <div>
      <div className="marcador-etiqueta-vivo">
        <p className="texto-marcador-vivo">{etiquetaMarcador}</p>
      </div>
      <ImagenesVideo
        DatosDeEntrada={[video]}
        tipoVideo={true}
        sinDescripcion={true}
        isConBorder={true}
      ></ImagenesVideo>
    </div>
  );
};

export default Vivo;
