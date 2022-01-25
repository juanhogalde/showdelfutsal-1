import React from 'react';
import './BarraDeNavegacion.css';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
import Menucategorias from '../MenuCategorias/MenuCategorias';
import {useDispatch} from 'react-redux';
import {gurdarCategoriaSeleccionada_accion} from '../../Redux/DatosInciales/AccionesDatosIniciales';

const BarraDeNavegacion = () => {
  // const userAgent = navigator.userAgent;
  // const isMobileIPhone = userAgent.indexOf('iPhone');
  // const isMobileAndroid = userAgent.indexOf('Android');

  const [click, setClick] = useState(false);
  const [isMasculino, setIsMasculino] = useState(false);
  const [isFemenenino, setIsFemenenino] = useState(false);
  const [isLiga, setIsLiga] = useState(false);
  const [isOtra, setIsOtra] = useState(false);
  const dispatch = useDispatch();
  const handleClick = categoria => {
    dispatch(gurdarCategoriaSeleccionada_accion(categoria));
    setIsMasculino(false);
    setIsFemenenino(false);
    setIsLiga(false);
    setClick(!click);
  };

  const abrirSubmenu = id => {
    switch (id) {
      case 'Masculino':
        setIsMasculino(!isMasculino);
        setIsFemenenino(false);
        setIsLiga(false);
        setIsOtra(false);
        break;
      case 'Femenino':
        setIsFemenenino(!isFemenenino);
        setIsMasculino(false);
        setIsLiga(false);
        setIsOtra(false);
        break;
      case 'Liga':
        setIsLiga(!isLiga);
        setIsFemenenino(false);
        setIsMasculino(false);
        setIsOtra(false);
        break;
      case 'Otras':
        setIsOtra(!isOtra);
        setIsFemenenino(false);
        setIsMasculino(false);
        setIsLiga(false);
        break;
      default:
        break;
    }
    // if (id === 'Masculino') {
    //   setIsMasculino(!isMasculino);
    //   setIsFemenenino(false);
    // } else {
    //   setIsFemenenino(!isFemenenino);
    //   setIsMasculino(false);
    // }
  };
  const eventoCerrarSubMenu = resp => {
    if (isMasculino) {
      setIsMasculino(true);
    }
    if (isFemenenino) {
      setIsFemenenino(true);
    }
    if (isOtra) {
      setIsOtra(!isOtra);
    }
    if (isLiga) {
      setIsLiga(!isLiga);
    }
    /* if (isOtra) {
      setIsOtra(true);
    } */
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
              <div className="nav-links" tabIndex="0" onBlur={() => eventoCerrarSubMenu()}>
                Femenino
                <div className={`${isFemenenino ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias
                    eventoApertura={isFemenenino}
                    categoria={2}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </li>
            <li className="nav-item" onClick={() => abrirSubmenu('Masculino')}>
              <div className="nav-links" tabIndex="1" onBlur={() => eventoCerrarSubMenu()}>
                Masculino
                <div className={`${isMasculino ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias
                    categoria={1}
                    eventoApertura={isMasculino}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </li>
            <li className="nav-item-logo" onClick={() => handleClick()}>
              <NavLink exact to="/" activeClassName="active" className="nav-logo">
                <div className="logo"></div>
              </NavLink>
            </li>
            <li className="nav-item" onClick={() => abrirSubmenu('Liga')}>
              <div className="nav-links" tabIndex="2" onBlur={() => eventoCerrarSubMenu()}>
                LNFA
                <div className={`${isLiga ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias categoria={3} eventoApertura={isLiga} handleClick={handleClick} />
                </div>
              </div>
            </li>
            {/* <li className="nav-item" onClick={() => handleClick(3)}>
              <NavLink exact to={`/Seccion/`} className="nav-links">
                Liga Nacional
              </NavLink>
            </li> */}
            <li className="nav-item" onClick={() => abrirSubmenu('Otras')}>
              <div className="nav-links" tabIndex="3" onBlur={() => eventoCerrarSubMenu()}>
                Otras Competencias
                <div className={`${isOtra ? 'dropdown' : 'dropdown-close'}`}>
                  <Menucategorias categoria={4} eventoApertura={isOtra} handleClick={handleClick} />
                </div>
              </div>
            </li>
            {/* <li className="nav-item" onClick={() => handleClick(4)}>
              <NavLink exact to="/Seccion/" activeClassName="active" className="nav-links">
                Otras Competencias
              </NavLink>
            </li> */}
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
