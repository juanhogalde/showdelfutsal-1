import React from 'react';
import {Link} from 'react-router-dom';
import './MenuCategorias.css';

const MenuCategorias = props => {
  const {eventoApertura, handleClick, categoria = 1} = props;

  return (
    <div className={`${eventoApertura ? 'Lista-submenu' : 'Lista-submenu-cerrada'}`}>
      <div className="I-submenu" onClick={() => handleClick(categoria)}>
        <Link className="Links-submenu" to="/Seccion/1">
          <h6>Division A</h6>
        </Link>
      </div>
      <div className="I-submenu" onClick={() => handleClick(categoria)}>
        <Link className="Links-submenu" to="/Seccion/2">
          <h6>Division B</h6>
        </Link>
      </div>
      {categoria && categoria !== 2 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/3">
            <h6>Division C</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 2 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/4">
            <h6>Division D</h6>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategorias;
