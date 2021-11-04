import React, {useEffect} from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import NavegacionLateral from '../NavegacionLateral/NavegacionLateral';
import './HomePrivada.css';
import img1 from '../../Static/Admin/imgPanel.png';
import img2 from '../../Static/Admin/imgPanel2.png';
import img3 from '../../Static/Admin/imgPanel3.png';
import img4 from '../../Static/Admin/imgPanel4.png';
import img5 from '../../Static/Admin/imgPanel5.png';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch} from 'react-icons/bs';
import Selector from '../Selector/Selector';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerDatosIniciales} from '../../Redux/DatosInciales/AccionesDatosIniciales';
import CargandoHomePrivada from './CargandoHomePrivada/CargandoHomePrivada';

const HomePrivada = () => {
  const [isMenuLateralAbierto, setIsAperturaLateral] = useState(false);
  const {usuarioLogueado} = useSelector(state => state.sotreLogueo);
  const {datosIniciales} = useSelector(state => state.sotreDatosIniciales);
  const dispatch = useDispatch();
  useEffect(() => {
    if (usuarioLogueado) {
      dispatch(obtenerDatosIniciales(usuarioLogueado));
    }
  }, [dispatch, usuarioLogueado]);
  const obtenerDatosDeSelector = datos => {
    console.log(datos);
  };
  const abrirMenuLateral = () => {
    console.log('Se ejecuto funcion');

    if (isMenuLateralAbierto) {
      setIsAperturaLateral(false);
    } else {
      setIsAperturaLateral(true);
    }
  };
  const escucharCambios = e => {
    console.log(e);
  };
  console.log(datosIniciales);
  if (datosIniciales) {
    return (
      <React.Fragment>
        <BarraDeNavegacionAdmin abrirMenuLateral={abrirMenuLateral}></BarraDeNavegacionAdmin>
        <NavegacionLateral
          isMenuLateralAbierto={isMenuLateralAbierto}
          abrirMenuLateral={abrirMenuLateral}
        />
        <div className="LP-HomePrivada">
          <div className="LI-ComponenteBuscar">
            <InputLowa
              type="text"
              placeholder={'Buscar'}
              inputConIcono={<BsSearch></BsSearch>}
              onChange={e => escucharCambios(e)}
            ></InputLowa>
            <Selector
              /* selectorConIcono={<BsSearch />} */
              onChange={obtenerDatosDeSelector}
              isCerrarMenuAlSeleccionar={false}
              isMultipleOpcion={true}
            ></Selector>
          </div>
          <div className="LI-Tarjetas">
            <TarjetaPanel tituloPanel={'Tabla de Posiciones'} url={img1}></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Publicidad'} url={img2}></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Noticias'} url={img3}></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Galeria'} url={img4}></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Campeonato'} url={img5}></TarjetaPanel>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {/*TODO: cambiar por otro cargando la imagen ahora va al principio antes del login */}
        <CargandoHomePrivada
          cargandoDatosIniciales={datosIniciales ? false : true}
        ></CargandoHomePrivada>
      </React.Fragment>
    );
  }
};
export default HomePrivada;
