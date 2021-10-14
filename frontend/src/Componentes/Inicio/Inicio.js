import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import Marcador from '../Marcador/Marcador';
/* import PieDepagina from '../PieDePagina/PieDepagina'; */
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {useSelector} from 'react-redux';
import publicidadLarga from '../../Static/Img/publicidad_larga.jpg';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Vivo from '../Vivo/Vivo';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import PieDepagina from '../PieDePagina/PieDepagina';

const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Inferiores', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  const noticia = useSelector(state => state.storePrueba.noticias);
  const {DatosDePruebaImagenes, DatosDePruebaVideos} = useSelector(state => state.storePrueba);
  const videoVivoPrueba = {fuente: 'MmysMu3mgvw'};
  return (
    <div className="LP-Inicio">
      {/* <BarraDeNavegacion /> */}
      <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>

          <div className="CI-Somos-frase">
            <div className="I-somos-frase">
              <img className="Somos-frase" src={SomosFrase}></img>
            </div>
          </div>
          <div className="CI-Somos-redes"></div>

          <div className="CI-Somos-radio">
            <div className="I-somos-radio"></div>
          </div>
        </div>
      </div>
      {/* SECCION VIVO */}
      <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Componente-Vivo">
            <Vivo video={videoVivoPrueba} />
          </div>
          <div className="CI-Chat-Vivo">
            <p>MINUTO A MINUTO</p>
            <div className="componente-Chat-Vivo"></div>
          </div>
          <div className="CI-Publicidad-Vivo">
            <img alt="" src={publicidadLarga}></img>
          </div>
        </div>
      </div>
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador margenes-Responsive-Seccion-Marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <div className="titulo-Marcador">
              <p style={{fontSize: '60px'}}>PARTIDOS</p>
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
      </div>
      {/* SECCION NOTICIAS */}
      <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="titulo-Seccion-Noticias">
            <p>NOTICIAS</p>
          </div>
          <div className="CI-Filtros">
            <Filtros filtros={Filtro}></Filtros>
          </div>
          <div className="CI-NoticiaPrincipal">
            <div className="componenteNoticiaPrincipal">
              <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
            </div>
          </div>
          <div className="CI-NoticiasMini">
            <div className="noticia-Miniatura-1">
              <NoticiasMiniatura
                isSeccionNoticias={true}
                datosModelado={noticia}
              ></NoticiasMiniatura>
            </div>
            <div className="noticia-Miniatura-2">
              <NoticiasMiniatura
                isSeccionNoticias={true}
                datosModelado={noticia}
              ></NoticiasMiniatura>
            </div>
          </div>
          <div className="publicidad-Noticias">
            <img alt="" src={publicidadLarga}></img>
          </div>
        </div>
      </div>

      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria margenes-Galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria-Imagenes">
            <p className="titulo-Galeria">GALERÍA</p>
            <div className="galeria-Imagenes-A">
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
            </div>
            <div className="galeria-Imagenes-B">
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
            </div>
          </div>
          <div className="CI-Galeria-Videos">
            <ImagenesVideo
              DatosDeEntrada={DatosDePruebaVideos}
              tipoDeSliderFlecha={true}
              tipoVideo={true}
            ></ImagenesVideo>
          </div>
        </div>
      </div>
      <PieDepagina />
    </div>
  );
};

export default Inicio;
