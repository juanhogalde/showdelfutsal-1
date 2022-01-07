import React, {useState} from 'react';
import Alertas from '../Alertas/Alertas';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './NuevoVivo.css';
const NuevoVivo = ({tipo = 'nuevo'}) => {
  const [datosVivo, setDatosVivo] = useState({isActiva: true});
  const [advertenciaFaltanDatos, setAdvertenciaFaltanDatos] = useState({
    mostrar: false,
    mensaje: '',
    tipo: '',
  });

  const escucharCambios = async (name, value) => {
    console.log(value);
    setDatosVivo({...datosVivo, [name]: value});
  };
  const RespuestaDeAlerta = () => {
    setAdvertenciaFaltanDatos({mostrar: false, mensaje: '', tipo: ''});
  };
  const guardarVivo = () => {
    if (datosVivo.nombreVivo && datosVivo.urlVivo && datosVivo.urlChat) {
      console.log('guardar vivo');
    } else {
      setAdvertenciaFaltanDatos({
        mostrar: true,
        mensaje: 'Faltan datos requeridos para agregar el vivo',
        tipo: 'warning',
      });
    }
  };

  return (
    <div className="CP-AgregarVivo">
      <div className="CI-DesactivarVivo">
        <p>Desactivar/Activar</p>
        <InputSwitchLowa
          checked={datosVivo.isActiva ? datosVivo.isActiva : datosVivo.isActiva}
          name="isActiva"
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div>

      <InputLowa
        name="nombreVivo"
        placeholder="Ingrese nombre del vivo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosVivo.nombreVivo ? datosVivo.nombreVivo : ''}
      ></InputLowa>
      <InputLowa
        name="urlVivo"
        placeholder="Ingrese enlace del vivo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosVivo.urlVivo ? datosVivo.urlVivo : ''}
      ></InputLowa>
      <InputLowa
        name="urlChat"
        placeholder="Ingrese enlace del chat"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosVivo.urlChat ? datosVivo.urlChat : ''}
      ></InputLowa>
      <BotonLowa
        onClick={() => guardarVivo(tipo)}
        tituloboton={tipo === 'editar' ? 'Editar vivo' : 'Guardar vivo'}
      />
      <Alertas
        mostrarSweet={advertenciaFaltanDatos.mostrar}
        subtitulo={advertenciaFaltanDatos.mensaje}
        tipoDeSweet={advertenciaFaltanDatos.tipo}
        RespuestaDeSweet={RespuestaDeAlerta}
      />
      {/* <Alertas
      mostrarSweet={isAgregarGaleria.isCargando || isEditarGaleria.isCargando}
      tipoDeSweet={isAgregarGaleria.tipo || isEditarGaleria.tipo}
      subtitulo={isAgregarGaleria.mensaje || isEditarGaleria.mensaje}
    />
    <Alertas
      mostrarSweet={
        isAgregarGaleria.isExito ||
        isAgregarGaleria.isError ||
        isEditarGaleria.isExito ||
        isEditarGaleria.isError
      }
      subtitulo={isAgregarGaleria.mensaje || isEditarGaleria.mensaje}
      tipoDeSweet={isAgregarGaleria.tipo || isEditarGaleria.tipo}
      RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
    /> */}
    </div>
  );
};

export default NuevoVivo;
