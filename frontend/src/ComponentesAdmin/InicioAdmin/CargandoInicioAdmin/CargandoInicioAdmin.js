import React from 'react';
import BarraDeNavegacionAdmin from '../../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import TarjetaPanel from '../../TarjetaPanel/TarjetaPanel';
import './CargandoInicioAdmin.css';

const CargandoInicioAdmin = ({cargandoDatosIniciales}) => {
  return (
    <div className="CP-CargandoHomePrivada">
      <BarraDeNavegacionAdmin></BarraDeNavegacionAdmin>
      <div className="LI-Tarjetas margenes-LI-Tarjetas-CargandoHomePrivada">
        <TarjetaPanel
          cargandoDatosIniciales={cargandoDatosIniciales}
          tituloPanel={'Tabla de Posiciones'}
        ></TarjetaPanel>
        <TarjetaPanel
          cargandoDatosIniciales={cargandoDatosIniciales}
          tituloPanel={'Publicidad'}
        ></TarjetaPanel>
        <TarjetaPanel
          cargandoDatosIniciales={cargandoDatosIniciales}
          tituloPanel={'Noticias'}
        ></TarjetaPanel>
        <TarjetaPanel
          cargandoDatosIniciales={cargandoDatosIniciales}
          tituloPanel={'Galeria'}
        ></TarjetaPanel>
        <TarjetaPanel
          cargandoDatosIniciales={cargandoDatosIniciales}
          tituloPanel={'Campeonato'}
        ></TarjetaPanel>
      </div>
    </div>
  );
};
export default CargandoInicioAdmin;
