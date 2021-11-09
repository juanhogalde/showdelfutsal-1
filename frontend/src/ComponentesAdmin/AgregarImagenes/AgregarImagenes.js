import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import './AgregarImagenes.css';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';

const AgregarImagenes = () => {
  const [imagenes, setImagenes] = useState([]);
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);
    var arreglo = [];
    if (value.length > 0) {
      for (let index = 0; index < value.length; index++) {
        arreglo.push(value[index]);
      }
      setImagenes(arreglo);
    }
  };
  return (
    <div className="CP-AgregarImagenes">
      <InputLowa
        name="titulo"
        placeholder="Ingrese Título"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="imagenes"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
        multiple={true}
      ></InputLowa>

      {imagenes && (
        <div className="CI-ListaImagnes">
          {imagenes.map((imagen, index) => {
            return (
              <div key={index} className="filaListaImagenes">
                <p className="nombreImagen">{imagen.name}</p>
                <div className="accionesFilaListaImagenes">
                  <FiEdit3 className="iconoAcción-ListaImagenes"></FiEdit3>
                  <MdDeleteForever className="iconoAcción-ListaImagenes" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <BotonLowa tituloboton="Agregar Imágenes"></BotonLowa>
    </div>
  );
};
export default AgregarImagenes;
