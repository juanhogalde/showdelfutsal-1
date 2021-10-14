import React from 'react';
import './PieDepagina.css';
import LogoPieDePagina from '../../Static/Img/isologo.png';

export const PieDepagina = () => {
  return (
    <div className="CP-Pie-pagina Seccion-footer">
      <div className="CI-Pie-Pagina">
        <div className="I-Logo">
          <img src={LogoPieDePagina} className="Logo" alt=""></img>
        </div>
        <div></div>
        <div className="I-Redes">
          {/* <h3>SIGUENOS</h3> */}
          <div className="red-social">
            <a href="#" className="">
              F
            </a>
            <a href="#" className="">
              T
            </a>
            <a href="#" className="">
              I
            </a>
            <a href="#" className="MdAccessibleForward">
              Y
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieDepagina;
