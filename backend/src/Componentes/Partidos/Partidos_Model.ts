import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  equipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipo'},
  equipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipo'},
  fechaPartido: Date,
  idEstadio: {type: Schema.Types.ObjectId, ref: 'modeloEstadio'},
  posicionFixture: Number,
  comentarios: [
    {
      color: String,
      texto: String,
    },
  ],
  campeonato: {type: Schema.Types.ObjectId, ref: 'modeloCampeonato'},
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
