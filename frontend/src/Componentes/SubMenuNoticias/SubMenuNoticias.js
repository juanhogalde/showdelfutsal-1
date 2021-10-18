import React from 'react';
import './SubMenuNoticias.css';

import {useState} from 'react';
import {NavLink} from 'react-router-dom';

const SubMenuNoticias = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="CP-SN-Noticias-Menu">
      <div className="CI-Noticias-titulo">
        <h4>CATEGORIA SECCION</h4>
      </div>
      <div className="CI-Noticias-Menu">
        <ul
          className={
            click ? 'I-Contenedor-Submenu-Noticias active' : 'I-Contenedor-Submenu-Noticias'
          }
        >
          <li className="I-Noticias-fixture">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="SubMenu-Noticias-Links"
              onClick={handleClick}
            >
              <h6>FIXTURE</h6>
            </NavLink>
          </li>
          <li className="I-Noticias-tabla-posiciones">
            <NavLink
              exact
              to=""
              activeClassName="active"
              className="SubMenu-Noticias-Links"
              onClick={handleClick}
            >
              <h6>TABLA DE POSICIONES </h6>
            </NavLink>
          </li>
          <li className="I-Noticias-categoria">
            <NavLink
              exact
              to=""
              activeClassName="active"
              className="SubMenu-Noticias-Links"
              onClick={handleClick}
            >
              <h6>NOTICIAS </h6>
            </NavLink>
          </li>
        </ul>
        {/* <div className="I-Noticias-fixture">
          <h6>Fixture</h6>
        </div>
        <div className="I-Noticias-tabla-posiciones">
          <h6>Tabla de posiciones</h6>
        </div>
        <div className="I-Noticias-categoria">
          <h6>Noticias</h6>
        </div> */}
      </div>
      <div className="I-Barra"></div>
    </div>
  );
};

export default SubMenuNoticias;
