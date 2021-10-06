import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import Marcador from '../Marcador/Marcador';
import PieDepagina from '../PieDePagina/PieDepagina';
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import storePrueba from '../../Redux/Prueba/ReducerPrueba';
import {useSelector} from 'react-redux';
import publicidadLarga from '../../Static/Img/publicidad_larga.jpg';
const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Inferiores', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  const noticia = useSelector(state => state.storePrueba.noticias);
  console.log(noticia);
  return (
    <div className="LP-Inicio">
      {/* <BarraDeNavegacion /> */}
      {/* SECCION BANNER INICIO */}
      {/* <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
        </div>
      </div> */}
      {/* SECCION VIVO */}
      {/* <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
        </div>
      </div> */}
      {/* SECCION MARCADOR */}
      {/* <div className="LI-Inicio seccion-marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <div className="titulo-Marcador">
              <p style={{fontSize: '80px'}}>PARTIDOS</p>
            </div>
            <div className="componente-Marcador">
              <Marcador />
            </div>
          </div>
          <div className="CI-Publicidad-Marcador">
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
          </div>
        </div>
      </div> */}
      {/* SECCION NOTICIAS */}
      <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="CI-Filtros">
            <Filtros filtros={Filtro}></Filtros>
          </div>
          <div className="CI-NoticiaPrincipal">
            <div className="componenteNoticiaPrincipal">
              <NoticiasMiniatura isSobreImagen={true}></NoticiasMiniatura>
            </div>
          </div>
          <div className="CI-NoticiasMini">
            <div className="noticia-Miniatura-1">
              <NoticiasMiniatura datosModelado={noticia}></NoticiasMiniatura>
            </div>
            <div className="noticia-Miniatura-2">
              <NoticiasMiniatura datosModelado={noticia}></NoticiasMiniatura>
            </div>
          </div>
          <div className="publicidad-Noticias">
            <img alt="" src={publicidadLarga}></img>
          </div>
          {/* <div className="CI-Noticias"></div>
          <div className="CI-Noticias"></div>
          <div className="Noticias-Miniaturas">
            <div className="Noticias"></div>
            <div className="Noticias"></div>
          </div>
          <div className="CI-Noticias"></div> */}
        </div>
      </div>
      {/* SECCION GALERIA */}
      {/* <div className="LI-Inicio seccion-galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria"></div>
          <div className="CI-Galeria"></div>
        </div>
      </div> */}
      {/* <PieDepagina /> */}
    </div>
  );
};

export default Inicio;
