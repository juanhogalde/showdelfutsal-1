import React from 'react';
import './InicioAdmin.css';
import img1 from '../../Static/Admin/imgPanel.png';
import img2 from '../../Static/Admin/imgPanel2.png';
import img3 from '../../Static/Admin/imgPanel3.png';
import img4 from '../../Static/Admin/imgPanel4.png';
import img5 from '../../Static/Admin/imgPanel5.png';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch} from 'react-icons/bs';
import Selector from '../Selector/Selector';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import {useSelector} from 'react-redux';
import CargandoInicioAdmin from './CargandoInicioAdmin/CargandoInicioAdmin';

const InicioAdmin = () => {
  const {datosIniciales} = useSelector(state => state.sotreDatosIniciales);

  const escucharCambios = e => {
    console.log(e);
  };
  const obtenerDatosDeSelector = datos => {
    console.log(datos);
  };
  if (datosIniciales) {
    return (
      <React.Fragment>
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
            <TarjetaPanel tituloPanel={'Noticias'} url={img3} linkTo="Noticias"></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Galeria'} url={img4}></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Campeonato'} url={img5}></TarjetaPanel>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <CargandoInicioAdmin
          cargandoDatosIniciales={datosIniciales ? false : true}
        ></CargandoInicioAdmin>
      </React.Fragment>
    );
  }
};
export default InicioAdmin;
