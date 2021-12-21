import React from 'react';
import './TarjetaEnfrentamiento.css';

const TarjetaEnfrentamiento = () => {
  return (
    <div className="CP-TarjetaEnfrentamiento">
      <div className="datos-Partido">
        <p>Zona A</p>
        <p>Bicentenario</p>
        <div className="CI-Resultados">
          <h3>0</h3>
          <h3>0</h3>
        </div>

        <p>27/11/2021</p>
        <p>Penales</p>
        <p>Comentarios</p>
      </div>
      <div className="equipo-Local">
        <img alt="" src="http://futsal.lowa.com.ar/escudos/escudo_defensores_del_este.png"></img>
      </div>
      <div className="equipo-Visitante">
        <img alt="" src="http://futsal.lowa.com.ar/escudos/escudo_aberastain.jpeg"></img>
      </div>
      <div className="nombre-Equipo-Local">
        <p>Defensores del Este</p>
      </div>
      <div className="nombre-Equipo-Visitante">
        <p> Club Social y Deportivo Aberastain San Lorenzo</p>
      </div>
    </div>
  );
};
export default TarjetaEnfrentamiento;
