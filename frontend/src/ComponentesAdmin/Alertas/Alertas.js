import React, {useState} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import logoCargando from '../../Static/Cargando.gif';
import BotonLowa from '../BotonLowa/BotonLowa';
import './Alertas.css';
/**
 ** Recive como parametros
 ** String titulo -> mensaje que se desea mostrar en el sweetAlert
 ** String subtitulo-> mensaje que se desa mostrar como subtitulo (mas pequeño y en colo gris)
 ** bool mostrarSweet-> variable booleana que define si se muestra (true) o no (false) la componente - requerida
 ** function RespuestaDeSweet-> funcion del padre que recibe un parametro booleano,por este medio se le comunica al padre la seleccion, true=confirmar false=cancelar
 ** String tipoDeSweet-> permite seleccionar el tipo de sweetAlert a mostrar, tipos admitidos: info,success,danger,warning,cargando - por defecto info
 ** NOTA: el control de mostrar y ocultar lo posee el padre mediante mostrarSweet
 * */
const Alertas = ({
  titulo,
  subtitulo = '',
  mostrarSweet,
  RespuestaDeSweet = () => {
    console.log('falta funcion RespuestaDeSweet');
  },
  tipoDeSweet = 'info',
}) => {
  const EventoClick = seleccion => {
    RespuestaDeSweet(seleccion);
  };

  const [mostrarProblema, setMostrarProblema] = useState(true);
  return (
    <div>
      {tipoDeSweet === 'info' ? (
        <SweetAlert
          info
          show={mostrarSweet}
          showCancel
          confirmBtnText="SI"
          cancelBtnText="No"
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="primary"
          title={titulo ? titulo : ''}
          onConfirm={() => EventoClick(true)}
          onCancel={() => EventoClick(false)}
        >
          {subtitulo}
        </SweetAlert>
      ) : null}

      {tipoDeSweet === 'success' ? (
        <SweetAlert
          success
          show={mostrarSweet}
          title={titulo ? titulo : ''}
          onConfirm={() => EventoClick(true)}
          customButtons={
            <React.Fragment>
              <BotonLowa onClick={() => EventoClick(true)} tituloboton={'Ok'}></BotonLowa>
            </React.Fragment>
          }
        >
          {subtitulo}
        </SweetAlert>
      ) : null}

      {tipoDeSweet === 'danger' ? (
        <SweetAlert
          danger
          show={mostrarSweet}
          confirmBtnText="Aceptar"
          confirmBtnBsStyle="danger"
          title={titulo ? titulo : ''}
          onConfirm={() => EventoClick(true)}
        >
          {subtitulo}
        </SweetAlert>
      ) : null}
      {tipoDeSweet === 'error' ? (
        <SweetAlert
          danger
          show={mostrarSweet}
          title={titulo ? titulo : ''}
          onConfirm={() => EventoClick(true)}
          customButtons={
            <React.Fragment>
              <BotonLowa onClick={() => EventoClick(true)} tituloboton={'Ok'}></BotonLowa>
            </React.Fragment>
          }
        >
          {subtitulo}
        </SweetAlert>
      ) : null}
      {tipoDeSweet === 'warning' ? (
        <SweetAlert
          warning
          show={mostrarSweet}
          cancelBtnText="Cancelar"
          cancelBtnBsStyle="light"
          confirmBtnText="De Acuerdo"
          confirmBtnBsStyle="warning"
          title={titulo ? titulo : ''}
          onConfirm={() => EventoClick(false)}
          onCancel={() => EventoClick(false)}
        >
          {subtitulo}
        </SweetAlert>
      ) : null}

      {tipoDeSweet === 'cargando' ? (
        <SweetAlert
          custom
          show={mostrarSweet}
          customButtons={<React.Fragment></React.Fragment>}
          customIcon={logoCargando}
          title={titulo ? titulo : ''}
          onConfirm={() => console.log('')}
        >
          {/* {!titulo && 'Cargando...'} */}
          {subtitulo}
        </SweetAlert>
      ) : null}
      {tipoDeSweet === 'cancelar' ? (
        <SweetAlert
          custom
          show={mostrarSweet}
          customIcon={logoCargando}
          title={titulo ? titulo : ''}
          confirmBtnText="Cancelar"
          confirmBtnBsStyle="primary"
          onConfirm={() => EventoClick(true)}
        >
          {!titulo && 'Cargando...'}
        </SweetAlert>
      ) : null}
      {tipoDeSweet === 'problema' ? (
        <SweetAlert
          danger
          show={mostrarProblema}
          cancelBtnText="Cancelar"
          cancelBtnBsStyle="light"
          confirmBtnText="Ok"
          confirmBtnBsStyle="danger"
          title={titulo ? titulo : ''}
          onConfirm={() => setMostrarProblema(false)}
        >
          {subtitulo}
        </SweetAlert>
      ) : null}
    </div>
  );
};
export default Alertas;
