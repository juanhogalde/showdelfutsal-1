import React from 'react';
import './BarraDeNavegacion.css';
import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
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
    // setIsMasculino(false);
    // setIsFemenenino(false);
    setClick(!click);
    console.log('INGRESA');
  };

  const abrirSubmenu = id => {
    console.log(id);
    if (id === 'Masculino') {
      setIsMasculino(!isMasculino);
    } else {
      setIsFemenenino(!isFemenenino);
    }
  };
  console.log(click);
  return (
    <>
      <div className="Contenedor-menu">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo-movil">
            <div className="logo-movil"></div>
          </NavLink>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <div className={isMasculino || isFemenenino ? 'nav menu active ' : 'nav-menu'}> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/Noticias"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Noticias
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => abrirSubmenu('Femenino')}>
              <div className="nav-links" activeClassName="active">
                Femenino
                <div className="dropdown">
                  <Menucategorias eventoApertura={isFemenenino} />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div
                activeClassName="active"
                className="nav-links"
                onClick={() => abrirSubmenu('Masculino')}
              >
                Masculino
                <div className="dropdown">
                  <Menucategorias eventoApertura={isMasculino} />
                </div>
              </div>
            </li>
            <li className="nav-item-logo">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-logo"
                onClick={handleClick}
              >
                <div className="logo"></div>
              </NavLink>
            </li>

            <li className="nav-item" onClick={() => handleClick()}>
              <NavLink
                exact
                to={`/Seccion/Copa`}
                // activeClassName="active"
                className="nav-links"
              >
                Copa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Seccion/Liga"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Liga
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Somos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Somos
              </NavLink>
            </li>
            {/* </div> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <AiOutlineMenu className={click ? 'Icon-Menu' : 'Icon-Menu'}></AiOutlineMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraDeNavegacion;
