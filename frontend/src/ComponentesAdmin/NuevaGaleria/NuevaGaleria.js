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
import compresorMultiple from '../../ModulosExternos/Compresor';

const NuevaGaleria = () => {
  const {isAgregarGaleria} = useSelector(state => state.storeImagenes);
  const [datosGaleria, setDatosGaleria] = useState({
    imagenes: [],
  });
  const [cantidadDeArchivos, setCantidadDeArchivos] = useState(0);
  const [alertaComprimir, setAlertaComprimir] = useState({
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  });
  const dispatch = useDispatch();

  const escucharCambios = async (name, value) => {
    if (name === 'imagenes') {
      setCantidadDeArchivos(value.length);
      setAlertaComprimir({
        tipo: 'cargando',
        mensaje: 'Comprimiendo Imágenes...',
        isCargando: true,
        isExito: false,
        isError: false,
      });
      let aux = [];

      Object.values(value).forEach(async img => {
        const respuesta = compresorMultiple(img);
        const resultado = await respuesta
          .then(res => {
            setAlertaComprimir({
              tipo: 'success',
              mensaje: 'Imágenes comprimidas con éxito.',
              isCargando: false,
              isExito: true,
              isError: false,
            });
            return res;
          })
          .catch(error => {
            console.log(error);
            setAlertaComprimir({
              tipo: 'error',
              mensaje: 'No se logró comprimir imágenes.',
              isCargando: false,
              isExito: false,
              isError: true,
            });
          });

        aux = [...aux, resultado];
        setDatosGaleria({...datosGaleria, imagenes: aux});
      });
    } else {
      setDatosGaleria({...datosGaleria, [name]: value});
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
    dispatch(agregarGaleria_accion(datosGaleria));
  };
  const valoresPorDefectoNuevaGaleria = () => {
    dispatch(volverPorDefectoAgregarGaleria_accion());
  };
  const respuestaDeSweetAlComprimir = respuesta => {
    console.log(respuesta);
    if (respuesta) {
      setAlertaComprimir({
        tipo: '',
        mensaje: '',
        isCargando: false,
        isExito: false,
        isError: false,
      });
    }
  };
  /* useEffect(() => {
    return () => {
      console.log('desmontó');
      dispatch(listarImagenes_accion());
    };
  }, [dispatch]); */
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

      {datosGaleria.imagenes.length === cantidadDeArchivos && (
        <div className="CI-ListaImagnes">
          {Object.values(datosGaleria.imagenes).map((imagen, index) => {
            return (
              imagen && (
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
              )
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
      <Alertas
        tipoDeSweet={alertaComprimir.tipo}
        mostrarSweet={
          alertaComprimir.isCargando || alertaComprimir.isExito || alertaComprimir.isError
        }
        subtitulo={alertaComprimir.mensaje}
        RespuestaDeSweet={respuestaDeSweetAlComprimir}
      ></Alertas>
    </div>
  );
};
export default NuevaGaleria;
