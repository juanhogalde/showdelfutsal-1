import React from 'react';
import './PaginaSomos.css';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import foto from '../../Static/Img/fotos_somos.png';
import foto2 from '../../Static/Img/foto2.jpg';
import frase from '../../Static/Img/titulo_somos.png';
import {useSelector} from 'react-redux';
import Radio from '../Radio/Radio';
import PieDepagina from '../PieDePagina/PieDepagina';

const PaginaSomos = () => {
  const {DatosDePruebaImagenes} = useSelector(state => state.storePrueba);

  return (
    <div className="LI-Nosotros seccion-nosotros">
      <div className="CP-Nosotros">
        <div className="CI-Nosotros-cuerpo">
          <div className="I-titulo-somos">
            <img alt="" className="foto-frase" src={frase}></img>
          </div>
          <div className="I-cuerpo-somos">
            <h3>HISTORIA</h3>
            <p>
              El Show del Futsal es la marca distintiva de la disciplina en la provincia, desde el
              año 2016. En aquel entonces, un grupo de locos periodistas amantes del futsal,
              comenzaron a trabajar en la idea de un medio de comunicación exclusivo del deporte. El
              pitido inicial fue con nuestro programa radial, el cual rápidamente derivó en
              transmisiones de los partidos de las diferentes categorías. Pero la ambición por
              mejorar y ser los mejores, nos llevó a meternos en otras plataformas para cubrir con
              las necesidades del público futsalero.
              <br />
              El primer cambio sin dudas fue nuestra incursión en las redes sociales, el cual nos
              permitió llegar a cada rincón de la provincia; y posicionarnos a nivel nacional e
              internacional. El crecimiento sin duda fue abismal, logrando captar la atención de
              figuras del 40x20. Con el correr del tiempo, y con ánimos de seguir escalando, llegó
              la incursión en la web. De esta manera surgió la primer y única página en San Juan
              dedicada exclusivamente al futsal, que también nos permitió acercar a diferentes
              sponsors que hoy por hoy, son parte fundamental de nuestro crecimiento.
              <br />
              Pero esto no fue todo, decidimos sacar nuestro arquero jugador para ir un 5 para 4. La
              virtualidad y el avance tecnológico nos permitió incursionar en las transmisiones vía
              streaming, que le dio el salto de calidad que nos permite posicionarnos en lo más alto
              de la escena local. El futuro, es promisorio, ya que no nos queremos quedar acá.
              Nuestro objetivo es ofrecer la mejora calidad en información a nuestros seguidores y
              estar en todos los lugares donde un sanjuanino esté… “PARANDOLA CON LA SUELA Y
              DEFINIENDO DE PUNTÍN AL ARCO.
            </p>
          </div>
        </div>
        <div className="CI-Nosotros-Galeria">
          <div className="I-componente-somos-slider">
            <ImagenesVideo tipoDeSliderFlecha={false} DatosDeEntrada={DatosDePruebaImagenes} />
          </div>
          <div className="I-componente-somos-fotos">
            <img alt="" className="foto" src={foto}></img>
            <img alt="" className="foto" src={foto2}></img>
          </div>
        </div>
        <div className="CI-Nosotros-radio">
          <div className="I-Radio">
            <div className="I-Componente-radio">
              <Radio isSeccionSomos={true}></Radio>
            </div>
          </div>
        </div>
      </div>
      <div className="CI-PieDePagina-Somos">
        <PieDepagina isConFondo={true}></PieDepagina>
      </div>
    </div>
  );
};

export default PaginaSomos;
