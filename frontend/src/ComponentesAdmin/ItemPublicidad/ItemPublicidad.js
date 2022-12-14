import './ItemPublicidad.css';
import React, {useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {eliminarPublicidad} from '../../Redux/Publicidades/AccionesPublicidades';
import {useDispatch} from 'react-redux';
import {MdDeleteForever} from 'react-icons/md';
import Alertas from '../Alertas/Alertas';

const ItemPublicidad = ({publicidad = {}, seleccionEditar = ()=>{}, ubicacion = 'Ubicación'}) => {
  const [mostrarAlertEliminarPublicidad, setMostrarAlertEliminarPublicidad] = useState(false);

  const dispatch = useDispatch();

  const irAEditarPublicidad = () => {
    seleccionEditar(publicidad)
  };
  const respuestaModalEliminar = respuesta => {
    setMostrarAlertEliminarPublicidad(false);
    if (respuesta) {
      dispatch(eliminarPublicidad(publicidad._id));
    }
  };
  return (
    <div className="CI-Publicidad-Item">
      <div className="info-Item-Publicidad">
        <p>{publicidad.fecha ? publicidad.fecha.substr(0, 10) : ''}</p>
        <p>{publicidad ? publicidad.nombrePublicidad : ''}</p>
      </div>
      <div className="acciones-Item-Publicidad">
        <FiEdit3
          className="iconoAcción-ListaImagenesPublicidad"
          onClick={() => irAEditarPublicidad()}
        ></FiEdit3>

        <MdDeleteForever
          onClick={() => setMostrarAlertEliminarPublicidad(true)}
          className="iconoAcción-ListaImagenesPublicidad"
        />
      </div>
      <Alertas
        mostrarSweet={mostrarAlertEliminarPublicidad}
        tipoDeSweet="warning"
        subtitulo="Esta seguro que desea eliminar la publicidad"
        RespuestaDeSweet={respuestaModalEliminar}
      />
    </div>
  );
};
export default ItemPublicidad;
