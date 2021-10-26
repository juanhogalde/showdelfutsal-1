import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useState} from 'react';
import './MenuCategorias.css';

const MenuCategorias = props => {
  const {eventoApertura} = props;

  // console.log(eventoApertura);

  //   const [click, setClick] = useState(false);

  //   const handleClick = () => setClick(!click);

  return (
    <div className={`${true ? 'Lista-submenu' : 'Lista-submenu-cerrada'}`}>
      <p class="I-submenu">
        <Link className="Links-submenu">
          <h6>Division B</h6>
        </Link>
      </p>
      <li class="I-submenu">
        <Link className="Links-submenu">
          <h6>Division B</h6>
        </Link>
      </li>
      <li class="I-submenu">
        <Link className="Links-submenu">
          <h6>Division B</h6>
        </Link>
      </li>
    </div>
  );
};

export default MenuCategorias;
