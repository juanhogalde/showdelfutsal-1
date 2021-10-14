import {model, Schema} from 'mongoose';
import ITablas from './Tablas_Interface';

const TablasSchema = new Schema({
  equipo1: {
    type: Schema.Types.ObjectId,
    ref: 'modeloEquipos',
  },
  equipo2: {
    type: Schema.Types.ObjectId,
    ref: 'modeloEquipos',
  },
  isEquipo2Eliminado: Boolean,
  idCampeonato: {
    type: Schema.Types.ObjectId,
    ref: 'modeloCampeonato',
  },
  zona: String,
  tipoZona: Number,
  pGanados: Number,
  pEmpatados: Number,
  pPerdidos: Number,
  pJugados: Number,
  golesAFavor: Number,
  golesEnContra: Number,
  difGoles: Number,
  puntos: Number,
  posicionEnTabla: Number,
  comentarios: [
    {
      color: String,
      texto: String,
    },
  ],
});

export default model<ITablas>('modeloTablas', TablasSchema);
