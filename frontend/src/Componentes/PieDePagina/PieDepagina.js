import React from 'react';
import './PieDepagina.css';
import LogoPieDePagina from '../../Static/Img/isologo.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
export const PieDepagina = () => {
  return (
    <div className="CP-Pie-pagina Seccion-footer">
      <div className="imagen-Fondo-Footer">
        <div className="CI-Pie-Pagina">
          <div className="I-Logo">
            <img src={LogoPieDePagina} className="Logo" alt=""></img>
          </div>
          <div></div>
          <div className="I-Redes">
            {/* <h3>SIGUENOS</h3> */}
            <div className="red-social">
              <a href="#" className="">
                <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
              </a>
              <a href="#" className="">
                <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
              </a>
              <a href="#" className="">
                <BsInstagram className="iconos-Redes-Sociales"></BsInstagram>
              </a>
              <a href="#" className="MdAccessibleForward">
                <BsYoutube className="iconos-Redes-Sociales"></BsYoutube>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieDepagina;
