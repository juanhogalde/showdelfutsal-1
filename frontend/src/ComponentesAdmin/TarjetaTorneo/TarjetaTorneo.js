import React from 'react';
import {HiDotsVertical} from 'react-icons/hi';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaTorneo.css';

const TarjetaTorneo = ({isCampeonato = false}) => {
  return (
    <div
      className={`${
        isCampeonato ? 'CP-TarjetaTorneo CP-TarjetaTorneo-Campeonato' : 'CP-TarjetaTorneo'
      }`}
    >
      {!isCampeonato && (
        <div className="CI-Titulo-TarjetaTorneo">
          <h5>Torneo 2021</h5>
        </div>
      )}

      <div className="CI-Imagen-TarjetaTorneo">
        <ImagenAdmin></ImagenAdmin>
      </div>
      <div className="CI-Cuerpo-TarjetaTorneo">
        {!isCampeonato && <p>07/07/2021 - 08/08/2021</p>}
        <p>Divisional A</p>
      </div>

      <div className="CI-Acciones-TarjetaTorneo">
        <HiDotsVertical />
      </div>
    </div>
  );
};
export default TarjetaTorneo;
