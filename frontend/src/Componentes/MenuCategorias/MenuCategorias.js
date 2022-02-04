import React from 'react';
import {Link} from 'react-router-dom';
import './MenuCategorias.css';

const MenuCategorias = props => {
  const {eventoApertura, handleClick, categoria = 1} = props;

  return (
    <div className={`${eventoApertura ? 'Lista-submenu' : 'Lista-submenu-cerrada'}`}>
      {categoria && categoria !== 2 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/1">
            <h6>Division A</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 2 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/2">
            <h6>Division B</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 1 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/6">
            <h6>Division A</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 1 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/7">
            <h6>Division B</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 2 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/3">
            <h6>Division C</h6>
          </Link>
        </div>
      )}
      {categoria && categoria !== 2 && categoria !== 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/4">
            <h6>Division D</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/9">
            <h6>Provincial</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/10">
            <h6>Regional</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 3 && categoria !== 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/11">
            <h6>Nacional</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/8">
            <h6>Inferiores</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/9">
            <h6>Ligas Departamentales</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/12">
            <h6>Copas y Torneos</h6>
          </Link>
        </div>
      )}
      {categoria && categoria === 4 && (
        <div className="I-submenu" onClick={() => handleClick(categoria)}>
          <Link className="Links-submenu" to="/Seccion/13">
            <h6>Selección Argentina</h6>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategorias;
