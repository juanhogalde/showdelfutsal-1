import React from 'react';
import './Animaciones.css';
/* Intrucciones del componente:

- Recibe como parametro = True (para alineacion del contenedor a la izquierda o derecha) 
- Recibe como String = derecha ( para las formas que contienen el contenedor a la derecha) sino se renderizan las formas del componente a la izquierda
- Recibe False (para alineacion del contenedor centrado, con sus formas que lo contienen)
*/

const Animaciones = ({isAlineado = false, orientacion = 'izquierda'}) => {
  return (
    <div>
      {isAlineado ? (
        <div
          className={`${
            orientacion === 'derecha'
              ? 'Contenedor-animaciones-Derecha'
              : 'Contenedor-animaciones-Izquierda'
          }`}
        >
          <div className={`${orientacion === 'derecha' ? 'A-Pentagono-Borde' : 'A-Circulo'}`}></div>

          <div className={`${orientacion === 'derecha' ? 'A-Circulos' : 'A-Pentagono'}`}></div>
        </div>
      ) : (
        <div className="Contenedor-animaciones-Centrado">
          <div className="A-Pentagono-Amarillo"></div>
          <div className="A-Cuadrado"></div>
        </div>
      )}
    </div>
  );
};

export default Animaciones;
