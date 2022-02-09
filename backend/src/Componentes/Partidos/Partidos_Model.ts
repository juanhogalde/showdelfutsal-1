import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  equipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  equipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
  resultadoLocal: {type: Number, default: 0},
  resultadoVisitante: {type: Number, default: 0},
  penalesLocal: {type: Number, default: 0},
  penalesVisitante: {type: Number, default: 0},
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
  // campeonato: {type: Schema.Types.ObjectId, ref: 'modeloCampeonatos'},
  idTabla: {type: Schema.Types.ObjectId, ref: 'modeloTablas'},
  idZona: {type: Schema.Types.ObjectId, ref: 'modeloZonas'},
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos'},
});

PartidosSchema.pre('save', function (next) {
  if (!this.idEquipoLocal || !this.idEquipoVisitante || !this.fechaPorJugar) {
    throw new Error(
      `Faltan datos ${this.idEquipoLocal ? 'equipo local-' : ''}  ${
        this.idEquipoVisitante ? 'equipo visitante-' : ''
      }  ${this.fechaPorJugar ? 'fecha por jugar' : ''}`
    );
  }
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
