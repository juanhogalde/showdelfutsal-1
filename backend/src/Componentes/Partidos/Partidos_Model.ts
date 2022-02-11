import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  equipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos', required: true},
  equipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
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
  idZona: {type: Schema.Types.ObjectId, ref: 'modeloZonas'},
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos'},
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
