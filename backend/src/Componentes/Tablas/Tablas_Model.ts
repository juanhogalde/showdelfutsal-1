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
  isEquipo2Eliminado: {type: Boolean},
  idCampeonato: {
    type: Schema.Types.ObjectId,
    ref: 'modeloCampeonatos',
  },
  zona: {type: String},
  tipoZona: {type: Number},
  pGanados: {type: Number},
  pEmpatados: {type: Number},
  pPerdidos: {type: Number},
  pJugados: {type: Number},
  golesAFavor: {type: Number},
  golesEnContra: {type: Number},
  difGoles: {type: Number},
  puntos: {type: Number},
  posicionEnTabla: {type: Number},
  comentarios: [
    {
      color: {type: String},
      texto: {type: String},
    },
  ],
});

export default model<ITablas>('modeloTablas', TablasSchema);
