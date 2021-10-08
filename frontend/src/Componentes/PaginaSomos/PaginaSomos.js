import React from 'react';
import './PaginaSomos.css';

/* const texto = {
  cuerpo: `El Show del Futsal es la marca distintiva de la disciplina en la provincia, desde el año 2016. En aquel entonces, un grupo de locos periodistas amantes del futsal, comenzaron a trabajar en la idea de un medio de comunicación exclusivo del deporte.
  El pitido inicial fue con nuestro programa radial, el cual rápidamente derivó en transmisiones de los partidos de las diferentes categorías. Pero la ambición por mejorar y ser los mejores, nos llevó a meternos en otras plataformas para cubrir con las necesidades del público futsalero.
  El primer cambio sin dudas fue nuestra incursión en las redes sociales, el cual nos permitió llegar a cada rincón de la provincia; y posicionarnos a nivel nacional e internacional. El crecimiento sin duda fue abismal, logrando captar la atención de figuras del 40x20. 
  Con el correr del tiempo, y con ánimos de seguir escalando, llegó la incursión en la web. De esta manera surgió la primer y única página en San Juan dedicada exclusivamente al futsal, que también nos permitió acercar a diferentes sponsors que son, hoy por hoy, son parte fundamental de nuestro crecimiento. 
  Pero esto no fue todo, decidimos sacar nuestro arquero jugador para ir un 5 para 4. La virtualidad y el avance tecnológico nos permitió incursionar en las transmisiones vía streaming, que le dio el salto de calidad que nos permite posicionarnos en lo más alto de la escena local. `,
}; */

const PaginaSomos = () => {
  return (
    <div className="LI-Nosotros seccion-nosotros">
      <div className="CP-Nosotros">
        <div className="CI-Nosotros-cuerpo">
          <div className="I-titulo-somos">
            <div className="frase-Somos"></div>
          </div>
          <div className="I-cuerpo-somos">
            <div className="texto-descripcion-somos">
              {/* <h1>HISTORIA</h1>
              <p>
                El Show del Futsal es la marca distintiva de la disciplina en la provincia, desde el
                año 2016. En aquel entonces, un grupo de locos periodistas amantes del futsal,
                comenzaron a trabajar en la idea de un medio de comunicación exclusivo del deporte.
                El pitido inicial fue con nuestro programa radial, el cual rápidamente derivó en
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
                sponsors que son, hoy por hoy, son parte fundamental de nuestro crecimiento.
                <br />
                Pero esto no fue todo, decidimos sacar nuestro arquero jugador para ir un 5 para 4.
                La virtualidad y el avance tecnológico nos permitió incursionar en las transmisiones
                vía streaming, que le dio el salto de calidad que nos permite posicionarnos en lo
                más alto de la escena local. El futuro, es promisorio, ya que no nos queremos quedar
                acá. Nuestro objetivo es ofrecer la mejora calidad en información a nuestros
                seguidores y estar en todos los lugares donde un sanjuanino esté… “PARANDOLA CON LA
                SUELA Y DEFINIENDO DE PUNTÍN AL ARCO
              </p> */}
            </div>
          </div>
        </div>
        <div className="CI-Nosotros-Galeria">
          <div className="I-componente-somos-slider">
            <div className="I-somos-slider"></div>
          </div>
          <div className="I-componente-somos-slider">
            <div className="I-somos-foto"></div>
          </div>
        </div>
        <div className="CI-Nosotros-radio">
          <div className="I-Radio"></div>
        </div>
      </div>
    </div>
  );
};

export default PaginaSomos;
