import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import Marcador from '../Marcador/Marcador';
import PieDepagina from '../PieDePagina/PieDepagina';
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="LP-Inicio">
      {/* <BarraDeNavegacion /> */}
      {/* SECCION BANNER INICIO */}
      {/* <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
        </div>
      </div> */}
      {/* SECCION VIVO */}
      {/* <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
        </div>
      </div> */}
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <div className="titulo-Marcador">
              <p style={{fontSize: '80px'}}>PARTIDOS</p>
            </div>
            <div className="componente-Marcador">
              <Marcador />
            </div>
          </div>
          <div className="CI-Publicidad-Marcador">
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
          </div>
        </div>
      </div>
      {/* SECCION NOTICIAS */}
      {/* <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="CI-Noticias"></div>
          <div className="CI-Noticias"></div>
          <div className="Noticias-Miniaturas">
            <div className="Noticias"></div>
            <div className="Noticias"></div>
          </div>
          <div className="CI-Noticias"></div>
        </div>
      </div> */}
      {/* SECCION GALERIA */}
      {/* <div className="LI-Inicio seccion-galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria"></div>
          <div className="CI-Galeria"></div>
        </div>
      </div> */}
      {/* <PieDepagina /> */}
    </div>
  );
};

export default Inicio;
