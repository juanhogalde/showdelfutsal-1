import React from 'react';
import './PaginaSomos.css';

const PaginaSomos = () => {
  return (
    <div className="LI-Nosotros seccion-nosotros">
      <div className="CP-Nosotros">
        <div className="CI-Nosotros">
          <div className="CI-Historia">
            <h1>SOMOS</h1>
          </div>
          <div className="CI-Historia">
            <div>
              <h6>Historia</h6>
              <p className="descripcion">fshgsdfhdfhderfh</p>
            </div>
          </div>
          <div className="CI-Historia">
            <h1>SOMOS</h1>
          </div>
        </div>
        <div className="CI-Nosotros-Galeria">
          <div className="CI-Slider">
            <h6>componente slider</h6>
          </div>
          <div className="CI-Slider">
            <h6>componente imagenes</h6>
          </div>
        </div>
        <div className="CI-Nosotros">Radio</div>
      </div>
    </div>
  );
};

export default PaginaSomos;
