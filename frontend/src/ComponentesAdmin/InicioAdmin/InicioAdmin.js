import React, {Suspense} from 'react';
import './InicioAdmin.css';
import CargandoInicioAdmin from './CargandoInicioAdmin/CargandoInicioAdmin';
import img1 from '../../Static/Admin/imgPanel.png';
import img2 from '../../Static/Admin/imgPanel2.png';
import img3 from '../../Static/Admin/imgPanel3.png';
import img4 from '../../Static/Admin/imgPanel4.png';
import img5 from '../../Static/Admin/imgPanel5.png';
import img6 from '../../Static/Admin/imgPanel6.png';
const TarjetaPanel = React.lazy(() => import('../TarjetaPanel/TarjetaPanel'));
const InicioAdmin = () => {

  // const escucharCambios = e => {
  //   console.log(e);
  // };


    return (
      <Suspense fallback={ <CargandoInicioAdmin
        cargandoDatosIniciales={true}
      ></CargandoInicioAdmin>}>
        <div className="LP-HomePrivada">
          {/* <div className="LI-ComponenteBuscar">
            <InputLowa
              type="text"
              placeholder={'Buscar'}
              inputConIcono={<BsSearch></BsSearch>}
              onChange={e => escucharCambios(e)}
            ></InputLowa>
          </div> */}
          <div className="LI-Tarjetas">
            <TarjetaPanel
              tituloPanel={'Tabla de Posiciones'}
              url={img1}
              linkTo="Tablas"
            ></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Publicidad'} url={img2} linkTo="Publicidad"></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Noticias'} url={img3} linkTo="Noticias"></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Galerías'} url={img4} linkTo="Galerías"></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Torneos'} url={img5} linkTo="Torneos"></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Transmitir Vivo'} url={img5} linkTo="Vivo"></TarjetaPanel>
            <TarjetaPanel
              tituloPanel={'Editor de Enfrentamientos'}
              url={img6}
              linkTo="Enfrentamientos/Nuevo"
            ></TarjetaPanel>
            <TarjetaPanel tituloPanel={'Editor Equipos'} url={img5} linkTo="Equipos"></TarjetaPanel>
          </div>
        </div>
      </Suspense>
    );
};
export default InicioAdmin;
