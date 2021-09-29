import React, {useState} from 'react';
import '../Imagenes/Imagenes.css';
const DatosDePrueba = [
  {
    fuenteImg:
      'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/12/31/14200300062531.jpg',
    descripcion: 'Liga Nac. Femenina ',
  },
  {
    fuenteImg: 'https://img.europapress.es/fotoweb/fotonoticia_20210928190715_420.jpg',
    descripcion: 'Campeones ligas menores',
  },
];
const Imagenes = ({DatosDeEntrada = DatosDePrueba, tipoDeSliderFlecha = false}) => {
  const [imagenActual, setImagenActual] = useState(
    DatosDeEntrada.length !== 0 ? DatosDeEntrada[0] : {}
  );
  return (
    <div className="CP-imagen">
      <div className="cuerpo">
        <img
          src={imagenActual.fuenteImg ? imagenActual.fuenteImg : ''}
          alt="imagen"
          className="img-imagen"
        />
        <div className="decripcion-imagen">
          <h3>{imagenActual.descripcion}</h3>
        </div>
      </div>
      {tipoDeSliderFlecha ? (
        <div className="flechas-izq-der">
          <p>flecha izq</p>
          <p>Flecga der</p>
        </div>
      ) : (
        <div className="botonera-inferior">
          {DatosDeEntrada.map(function (element) {
            return <p className="botones-redondo">o</p>;
          })}
        </div>
      )}
    </div>
  );
};
export default Imagenes;
// {element.tipoDeSliderFlecha ? (
//     <div className="flechas-izq-der">
//       <p>flecha izq</p>
//       <p>Flecga der</p>
//     </div>
//   ) : (
//     DatosDeEntrada.map(function () {
//       return (
//         <div className="botonera-inferior">
//           <p>o</p>
//         </div>
//       );
//     })
//   )}
