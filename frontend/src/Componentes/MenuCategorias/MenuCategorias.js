import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useState} from 'react';
import './MenuCategorias.css';

const MenuCategorias = props => {
  const {eventoApertura, handleClick} = props;

  return (
    <div className={`${eventoApertura ? 'Lista-submenu' : 'Lista-submenu-cerrada'}`}>
      <li class="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division B</h6>
        </Link>
      </li>
      <li class="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division B</h6>
        </Link>
      </li>
      <li class="I-submenu" onClick={() => handleClick()}>
        <Link className="Links-submenu" to="/">
          <h6>Division B</h6>
        </Link>
      </li>
    </div>
  );
};

export default MenuCategorias;
