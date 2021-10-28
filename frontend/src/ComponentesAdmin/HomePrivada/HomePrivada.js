import React from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import './HomePrivada.css';
import img1 from '../../Static/Admin/imgPanel.png';
import img2 from '../../Static/Admin/imgPanel2.png';
import img3 from '../../Static/Admin/imgPanel3.png';
import img4 from '../../Static/Admin/imgPanel4.png';
import img5 from '../../Static/Admin/imgPanel5.png';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch} from 'react-icons/bs';
const HomePrivada = () => {
  return (
    <div className="LP-HomePrivada">
      <BarraDeNavegacionAdmin></BarraDeNavegacionAdmin>
      <div className="LI-ComponenteBuscar">
        <InputLowa placeholder={'Buscar'} inputConIcono={<BsSearch></BsSearch>}></InputLowa>
      </div>
      <div className="LI-Tarjetas">
        <TarjetaPanel tituloPanel={'Tabla de Posiciones'} url={img1}></TarjetaPanel>
        <TarjetaPanel tituloPanel={'Publicidad'} url={img2}></TarjetaPanel>
        <TarjetaPanel tituloPanel={'Noticias'} url={img3}></TarjetaPanel>
        <TarjetaPanel tituloPanel={'Galeria'} url={img4}></TarjetaPanel>
        <TarjetaPanel tituloPanel={'Campeonato'} url={img5}></TarjetaPanel>
      </div>
    </div>
  );
};
export default HomePrivada;
