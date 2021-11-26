import React, {useState} from 'react';
import './NuevaGaleria.css';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useDispatch, useSelector} from 'react-redux';
import {
  agregarGaleria_accion,
  volverPorDefectoAgregarGaleria_accion,
} from '../../Redux/Imagenes/AccionesImagenes';
import Alertas from '../Alertas/Alertas';

const NuevaGaleria = () => {
  const {isAgregarGaleria} = useSelector(state => state.storeImagenes);
  const [datosGaleria, setDatosGaleria] = useState({});

  const dispatch = useDispatch();

  const escucharCambios = (name, value) => {
    setDatosGaleria({...datosGaleria, [name]: value});
  };

  const eliminarImagen = index => {
    var auxImagenes = [];
    auxImagenes = datosGaleria.imagenes.slice();
    auxImagenes.splice(index, 1);
    console.log(auxImagenes);
    setDatosGaleria({...datosGaleria, imagenes: auxImagenes});
  };
  const guardarNuevaGaleria = () => {
    /* var fechaDeCarga = new Date();
    setDatosGaleria({...datosGaleria, fechaCarga: fechaDeCarga});
    if (datosGaleria.fechaCarga) {
      dispatch(agregarGaleria_accion(datosGaleria));
    } */
    dispatch(agregarGaleria_accion(datosGaleria));
  };
  const valoresPorDefectoNuevaGaleria = () => {
    console.log('ok');
    dispatch(volverPorDefectoAgregarGaleria_accion());
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
          {Object.values(datosGaleria.imagenes).map((imagen, index) => {
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
      <Alertas
        tipoDeSweet={isAgregarGaleria.tipo}
        mostrarSweet={
          isAgregarGaleria.isCargando || isAgregarGaleria.isExito || isAgregarGaleria.isError
        }
        RespuestaDeSweet={valoresPorDefectoNuevaGaleria}
        subtitulo={isAgregarGaleria.mensaje}
      />
    </div>
  );
};
export default NuevaGaleria;
