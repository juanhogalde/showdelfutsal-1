import React from 'react';
import './PieDepagina.css';
import LogoPieDePagina from '../../Static/Img/isologo.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';
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
              <Link className="">
                <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
              </Link>
              <Link className="">
                <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
              </Link>
              <Link className="">
                <BsInstagram className="iconos-Redes-Sociales"></BsInstagram>
              </Link>
              <Link className="">
                <BsYoutube className="iconos-Redes-Sociales"></BsYoutube>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieDepagina;
