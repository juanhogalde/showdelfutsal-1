import {model, Schema} from 'mongoose';
import ITablas from './Tablas_Interface';

const TablasSchema = new Schema({
  idEquipos: [
    {
      type: Schema.Types.String,
      ref: 'modeloEquipos',
    },
  ],
  idCampeonato: {
    type: Schema.Types.ObjectId,
    ref: 'modeloCampeonatos',
  },
  zona: {type: Schema.Types.ObjectId, ref: 'modeloZonas'},
  tipoZona: {type: Number},
  comentarios: [
    {
      color: {type: String},
      texto: {type: String},
    },
  ],
  division: Number,
});

export default model<ITablas>('modeloTablas', TablasSchema);
