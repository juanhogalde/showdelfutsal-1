import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  equipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  equipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  resultadoLocal: {type: Number},
  resultadoVisitante: {type: Number},
  penalesLocal: {type: Number},
  penalesVisitante: {type: Number},
  fechaPartido: {type: Date},
  idEstadio: {type: Schema.Types.ObjectId, ref: 'modeloEstadios'},
  posicionFixture: {type: Number},
  comentarios: [
    {
      color: {type: String},
      texto: {type: String},
    },
  ],
  campeonato: {type: Schema.Types.ObjectId, ref: 'modeloCampeonatos'},
  idTabla: {type: Schema.Types.ObjectId, ref: 'modeloTablas'},
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
