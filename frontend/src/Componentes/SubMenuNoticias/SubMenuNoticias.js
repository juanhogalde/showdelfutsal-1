import React from 'react';
import './SubMenuNoticias.css';
import {NavLink} from 'react-router-dom';

const SubMenuNoticias = () => {
  return (
    <div className="CP-SN-Noticias-Menu">
      <div className="CI-Noticias-titulo">
        <h4>CATEGORIA SECCION</h4>
      </div>
      <div className="CI-Noticias-Menu">
        {/* <ul>
          <li className="I-Noticias-fixture">
            <NavLink
              exact
              to="/Noticias"
              activeClassName="active"
              className="nav-links"
              //   onClick={handleClick}
            >
              Fixture
            </NavLink>
          </li>
          <li className="I-Noticias-tabla-posiciones">
            <NavLink
              exact
              to="/Noticias"
              activeClassName="active"
              className="nav-links"
              //   onClick={handleClick}
            >
              Fixture
            </NavLink>
          </li>
          <li className="I-Noticias-categoria">
            <NavLink
              exact
              to="/Noticias"
              activeClassName="active"
              className="nav-links"
              //   onClick={handleClick}
            >
              Fixture
            </NavLink>
          </li>
        </ul> */}
        <div className="I-Noticias-fixture">
          <h6>Fixture</h6>
        </div>
        <div className="I-Noticias-tabla-posiciones">
          <h6>Tabla de posiciones</h6>
        </div>
        <div className="I-Noticias-categoria">
          <h6>Noticias</h6>
        </div>
      </div>
      <div className="I-Barra"></div>
    </div>
  );
};

export default SubMenuNoticias;
