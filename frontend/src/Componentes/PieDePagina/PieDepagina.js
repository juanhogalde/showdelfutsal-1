import React from 'react';
import './PieDepagina.css';
import LogoPieDePagina from '../../Static/Img/isologo.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
export const PieDepagina = ({isConFondo = false}) => {
  const redireccionar = url => {
    window.open(url);
  };
  return (
    <div
      className={`${
        isConFondo
          ? 'CP-Pie-pagina Seccion-footer Seccion-footer-inicio'
          : 'CP-Pie-pagina Seccion-footer'
      }`}
      id="PieDePagina"
    >
      <div className="imagen-Fondo-Footer">
        <div className="CI-Pie-Pagina">
          <div className="I-Logo">
            <img src={LogoPieDePagina} className="Logo" alt=""></img>
          </div>

          <div className="CI-redes-sociales">
            <div className="I-Redes ">
              {/* <h3>SIGUENOS</h3> */}
              <div className="red-social red-social-PieDePagina">
                <div onClick={() => redireccionar('https://www.facebook.com/ElShowdelFutsal')}>
                  <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
                </div>
                <div onClick={() => redireccionar()}>
                  <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
                </div>
                <div onClick={() => redireccionar('https://www.instagram.com/elshowdelfutsal/')}>
                  <BsInstagram className="iconos-Redes-Sociales"></BsInstagram>
                </div>
                <div
                  onClick={() =>
                    redireccionar('https://www.youtube.com/channel/UCPigWjVAL4yAFBbXOyElpmA')
                  }
                >
                  <BsYoutube className="iconos-Redes-Sociales"></BsYoutube>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieDepagina;
