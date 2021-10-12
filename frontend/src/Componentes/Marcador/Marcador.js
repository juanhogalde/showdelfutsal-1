import React from 'react';
import escudo from '../../Static/Img/escudoA.png';
import InfoPartido from '../InfoPartido/InfoPartido';
import './Marcador.css';

const partido = {
  _id: {},
  equipoA: {
    nombreClub: 'CA Jachal City',
    escudo: '',
    resultado: '6',
    penales: '4',
  },
  equipoB: {
    nombreClub: 'CA Tío Nacho',
    escudo: '',
    resultado: '6',
    penales: '2',
  },
  fecha: {dia: '30/09/2021', hora: '21:00'},
  sede: 'Polideportivo El Masche',
  categoria: {
    nombre: 'Masculino',
    subcategoria: 'Reserva',
  },
};

const Marcador = () => {
  const siguientePartido = opcion => {
    console.log(opcion);
  };

  return (
    <div className="layaout">
      <div className="Marcador">
        <div className="marcador-cuerpo">
          <div className="categoria-Marcador">
            <h4>
              {partido.categoria.nombre} - {partido.categoria.subcategoria}
            </h4>
          </div>
          <div className="info-partido">
            <InfoPartido
              fecha={partido.fecha}
              sede={partido.sede}
              siguientePartido={siguientePartido}
            />
          </div>
          <div className="escudo-A">
            <img alt="" src={escudo} className="img-Escudo"></img>
          </div>
          <div className="marcador-A">
            <div className="contenedor-resultado-Marcador-A">
              <h1 className="contador-Marcador">{partido.equipoA.resultado}</h1>
            </div>
          </div>
          <div className="escudo-B">
            <img alt="" src={escudo} className="img-Escudo"></img>
          </div>
          <div className="marcador-B">
            <div className="contenedor-resultado-Marcador-B">
              <h1 className="contador-Marcador">{partido.equipoB.resultado}</h1>
            </div>
          </div>
          <div className="nombreEquipo-Marcador nombreEquipo-A">
            <p>{partido.equipoA.nombreClub}</p>
          </div>
          <div className="nombreEquipo-Marcador nombreEquipo-B">
            <p>{partido.equipoB.nombreClub}</p>
          </div>
          {partido.equipoA.penales && partido.equipoB.penales && (
            <div className="penales">
              <h3>Penales</h3>
              <h4>
                ({partido.equipoA.penales}-{partido.equipoB.penales})
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Marcador;
