import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  idEquipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos', required: true},
  idEquipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos', required: true},
  resultadoLocal: {type: Number},
  resultadoVisitante: {type: Number},
  penalesLocal: {type: Number},
  penalesVisitante: {type: Number},
  fechaPorJugar: {type: Number},
  fechaPartido: {type: Date},
  idEstadio: {type: Schema.Types.String, ref: 'modeloEstadios'},
  posicionFixture: {type: Number},
  comentarios: [
    {
      color: {type: String},
      texto: {type: String},
    },
  ],
  idZona: {type: Schema.Types.ObjectId, ref: 'modeloZonas', required: true},
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos', required: true},
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
