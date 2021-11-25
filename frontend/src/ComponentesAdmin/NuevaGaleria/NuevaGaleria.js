import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import './NuevaGaleria.css';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';

const NuevaGaleria = () => {
  const [datosGaleria, setDatosGaleria] = useState({});

  const escucharCambios = (name, value) => {
    var arreglo = [];
    if (typeof value === 'string') {
      setDatosGaleria({...datosGaleria, [name]: value});
    } else {
      for (let index = 0; index < value.length; index++) {
        arreglo.push(value[index]);
      }
      setDatosGaleria({...datosGaleria, imagenes: arreglo});
    }
  };
  const eliminarImagen = index => {
    var auxImagenes = [];
    auxImagenes = datosGaleria.imagenes.slice();
    auxImagenes.splice(index, 1);
    console.log(auxImagenes);
    setDatosGaleria({...datosGaleria, imagenes: auxImagenes});
  };
  const guardarNuevaGaleria = () => {
    var fechaDeCarga = new Date();
    setDatosGaleria({...datosGaleria, fechaCarga: fechaDeCarga});
  };

  return (
    <div className="CP-AgregarImagenes">
      <InputLowa
        name="descripcion"
        placeholder="Ingrese Título"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="imagenes"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
        multiple={true}
      ></InputLowa>

      {datosGaleria.imagenes && (
        <div className="CI-ListaImagnes">
          {datosGaleria.imagenes.map((imagen, index) => {
            return (
              <div key={index} className="filaListaImagenes">
                <p className="nombreImagen">{imagen.name}</p>
                <div className="accionesFilaListaImagenes">
                  <FiEdit3 className="iconoAcción-ListaImagenes"></FiEdit3>
                  <MdDeleteForever
                    onClick={() => eliminarImagen(index)}
                    className="iconoAcción-ListaImagenes"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <BotonLowa
        tituloboton="Agregar Imágenes"
        disabled={Object.keys(datosGaleria).length > 1 ? false : true}
        onClick={() => guardarNuevaGaleria()}
      ></BotonLowa>
    </div>
  );
};
export default NuevaGaleria;
