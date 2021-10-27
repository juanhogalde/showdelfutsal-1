import React from 'react';
import {Link} from 'react-router-dom';
import './MenuCategorias.css';

const MenuCategorias = props => {
  const {eventoApertura, handleClick} = props;

  return (
    <div className={`${eventoApertura ? 'Lista-submenu' : 'Lista-submenu-cerrada'}`}>
      <div className="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division A</h6>
        </Link>
      </div>
      <div className="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division B</h6>
        </Link>
      </div>
      <div className="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division C</h6>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategorias;
