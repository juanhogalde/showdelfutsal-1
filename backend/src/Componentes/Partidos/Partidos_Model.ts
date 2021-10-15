import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  equipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  equipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  resultadoLocal: Number,
  resultadoVisitante: Number,
  penalesLocal: Number,
  penalesVisitante: Number,
  fechaPartido: Date,
  idEstadio: {type: Schema.Types.ObjectId, ref: 'modeloEstadios'},
  posicionFixture: Number,
  comentarios: [
    {
      color: String,
      texto: String,
    },
  ],
  campeonato: {type: Schema.Types.ObjectId, ref: 'modeloCampeonatos'},
  idTabla: {type: Schema.Types.ObjectId, ref: 'modeloTablas'},
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
