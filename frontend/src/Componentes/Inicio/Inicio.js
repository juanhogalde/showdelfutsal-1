import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import PieDepagina from '../PieDePagina/PieDepagina';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="LP-Inicio">
      <BarraDeNavegacion />
      {/* SECCION BANNER INICIO */}
      <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
        </div>
      </div>
      {/* SECCION VIVO */}
      <div className="LI-Inicio seccion-vivo">
        <div className="CP-Vivo">
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
        </div>
      </div>
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador"></div>
          <div className="CI-Marcador"></div>
        </div>
      </div>
      {/* SECCION NOTICIAS */}
      <div className="LI-Inicio seccion-noticias">
        <div className="CP-Noticias">
          <div className="CI-Noticias"></div>
          <div className="CI-Noticias"></div>
          <div className="CI-Noticias"></div>
        </div>
      </div>
      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria"></div>
          <div className="CI-Galeria"></div>
        </div>
      </div>
      {/* <PieDepagina /> */}
    </div>
  );
};

export default Inicio;
