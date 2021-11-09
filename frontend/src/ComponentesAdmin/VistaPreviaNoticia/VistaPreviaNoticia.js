import React from 'react';
import {useHistory, useParams} from 'react-router';
import BotonLowa from '../BotonLowa/BotonLowa';
import TarjetaNoticias from '../TarjetaNoticias/TarjetaNoticias';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import './VistaPreviaNoticia.css';

const cuerpoNoticia =
  'Este entrenamiento se desarrolló con la presencia de 34 de los 35 convocados, ya que Nicolás González no pudo viajar desde Italia hasta no contar con un PCR negativo, luego de que el 26 de octubre se le declarara un contagio de coronavirus. El resultado se conocerá mañana y allí se le abrirán o cerrarán las puertas al viaje del atacante de la Fiorentina.';

const VistaPreviaNoticia = () => {
  const parametros = useParams();
  console.log(parametros);
  const historialDeNavegacion = useHistory();
  const enviarParaEditar = () => {
    historialDeNavegacion.push('/Noticia/Nueva');
  };
  return (
    <div className="CP-VistaPreviaNoticia">
      <TarjetaNoticias></TarjetaNoticias>
      <TextAreaLowa value={cuerpoNoticia} readOnly={true}></TextAreaLowa>
      <BotonLowa tituloboton="Editar Noticia" onClick={() => enviarParaEditar()}></BotonLowa>
    </div>
  );
};
export default VistaPreviaNoticia;
