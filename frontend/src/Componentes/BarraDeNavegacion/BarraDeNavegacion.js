import React from 'react';
import './BarraDeNavegacion.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';

const BarraDeNavegacion = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="Contenedor-menu">
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo-movil">
              <div className="logo-movil"></div>
            </NavLink>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Noticias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to=""
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Femenino
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to=""
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Masculino
                </NavLink>
              </li>
              <li className="nav-item-logo">
                <NavLink
                  exact
                  to=""
                  activeClassName="active"
                  className="nav-logo"
                  onClick={handleClick}
                >
                  <div className="logo"></div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to=""
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Copa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to=""
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
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}> +</i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default BarraDeNavegacion;
