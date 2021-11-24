import React from 'react';
import './BarraDeNavegacion.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import Menucategorias from '../MenuCategorias/MenuCategorias';

const BarraDeNavegacion = () => {
  // const userAgent = navigator.userAgent;
  // const isMobileIPhone = userAgent.indexOf('iPhone');
  // const isMobileAndroid = userAgent.indexOf('Android');

  const [click, setClick] = useState(false);
  const [isMasculino, setIsMasculino] = useState(false);
  const [isFemenenino, setIsFemenenino] = useState(false);

  const handleClick = () => {
    setIsMasculino(false);
    setIsFemenenino(false);
    setClick(!click);
  };

  const abrirSubmenu = id => {
    if (id === 'Masculino') {
      setIsMasculino(!isMasculino);
    } else {
      setIsFemenenino(!isFemenenino);
    }
  };
  return (
    <>
      <div className="Contenedor-menu">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo-movil">
            <div className="logo-movil"></div>
          </NavLink>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item" onClick={() => handleClick()}>
              <NavLink exact to="/Noticias" activeClassName="active" className="nav-links">
                Noticias
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => abrirSubmenu('Femenino')}>
              <div className="nav-links">
                Femenino
                <div className={`${isFemenenino ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias eventoApertura={isFemenenino} handleClick={handleClick} />
                </div>
              </div>
            </li>
            <li className="nav-item" onClick={() => abrirSubmenu('Masculino')}>
              <div className="nav-links">
                Masculino
                <div className={`${isMasculino ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias eventoApertura={isMasculino} handleClick={handleClick} />
                </div>
              </div>
            </li>
            <li className="nav-item-logo" onClick={() => handleClick()}>
              <NavLink exact to="/" activeClassName="active" className="nav-logo">
                <div className="logo"></div>
              </NavLink>
            </li>

            <li className="nav-item" onClick={() => handleClick()}>
              <NavLink exact to={`/Seccion/Liga Nacional`} className="nav-links">
                Liga Nacional
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => handleClick()}>
              <NavLink
                exact
                to="/Seccion/Otras Competencias"
                activeClassName="active"
                className="nav-links"
              >
                Otras Competencias
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => handleClick()}>
              <NavLink exact to="/Somos" activeClassName="active" className="nav-links">
                Quienes Somos
              </NavLink>
            </li>
            {/* </div> */}
          </ul>
          <div className="nav-icon" onClick={() => handleClick()}>
            <AiOutlineMenu className={click ? 'Icon-Menu' : 'Icon-Menu'}></AiOutlineMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraDeNavegacion;
