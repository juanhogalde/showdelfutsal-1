import React, {useLayoutEffect, useState} from 'react';
// import escudo from '../../Static/Img/escudo_huarpes.png';
// import escudoB from '../../Static/Img/escudo_alianza.png';

import InfoPartido from '../InfoPartido/InfoPartido';
import './Marcador.css';
import {useSelector} from 'react-redux';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';

// const partido = {
//   _id: {},
//   equipoA: {
//     nombreClub: 'Huarpes FC',
//     escudo: '',
//     resultado: '6',
//     penales: '4',
//   },
//   equipoB: {
//     nombreClub: 'CAJ Alianza',
//     escudo: '',
//     resultado: '6',
//     penales: '2',
//   },
//   fecha: {dia: '30/09/2021', hora: '21:00'},
//   sede: 'Estadio Aldo Cantoni',
//   categoria: {
//     nombre: 'Masculino',
//     subcategoria: 'Reserva',
//   },
// };

const Marcador = () => {
  const {partidos} = useSelector(state => state.storePartidos);
  const [siguiente, setSiguiente] = useState(0);
  const [partido, setPartido] = useState([]);
  const siguientePartido = opcion => {
    var sig = 0;
    if (opcion === 1) {
      if (siguiente === partidos.length - 1) {
        setSiguiente(0);
        sig = 0;
      } else {
        setSiguiente(siguiente + 1);
        sig = siguiente + 1;
      }
    } else {
      if (siguiente === 0) {
        setSiguiente(partidos.length - 1);
        sig = partidos.length - 1;
      } else {
        setSiguiente(siguiente - 1);
        sig = siguiente - 1;
      }
    }
    setPartido(partidos[sig]);
  };
  useLayoutEffect(() => {
    if (partidos.length) {
      setPartido(partidos[0]);
    }
  }, [setPartido, partidos]);
  return (
    <div className="Marcador">
      <div className="marcador-cuerpo">
        <div className="categoria-Marcador">
          {/* <h4>
            {partido.categoria.nombre} - {partido.categoria.subcategoria}
          </h4> */}
          <EtiquetaCategoria
            categoriaId={partido.campeonato ? partido.campeonato.idCategoria : 0}
          />
        </div>
        <div className="info-partido">
          <InfoPartido
            fecha={partido.fechaPartido ? partido.fechaPartido : {}}
            sede={partido.idEstadio ? partido.idEstadio.nombreEstadio : ''}
            siguientePartido={siguientePartido}
          />
        </div>
        <div className="escudo-A">
          <img
            alt=""
            src={partido.equipoLocal ? partido.equipoLocal.escudo : ''}
            className="img-Escudo"
          ></img>
        </div>
        <div className="marcador-A">
          <div className="contenedor-resultado-Marcador-A">
            <h1 className="contador-Marcador">
              {partido.resultadoLocal ? partido.resultadoLocal : ''}
            </h1>
          </div>
        </div>
        <div className="escudo-B">
          <img
            alt=""
            src={partido.equipoVisitante ? partido.equipoVisitante.escudo : ''}
            className="img-Escudo"
          ></img>
        </div>
        <div className="marcador-B">
          <div className="contenedor-resultado-Marcador-B">
            <h1 className="contador-Marcador">
              {partido.resultadoVisitante ? partido.resultadoVisitante : ''}
            </h1>
          </div>
        </div>
        <div className="nombreEquipo-Marcador nombreEquipo-A">
          <h5>{partido.equipoLocal ? partido.equipoLocal.nombreClub : ''}</h5>
        </div>
        <div className="nombreEquipo-Marcador nombreEquipo-B">
          <h5>{partido.equipoVisitante ? partido.equipoVisitante.nombreClub : ''}</h5>
        </div>
        {partido.penalesLocal && partido.penalesVisitante && (
          <div className="penales">
            <h4>Penales</h4>
            <p>
              ({partido.penalesLocal}-{partido.penalesVisitante})
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Marcador;
