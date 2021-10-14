import {Document} from 'mongoose';

export default interface ITablas extends Document {
  _id: string;
  equipo1: string;
  equipo2: string;
  isEquipo2Eliminado: boolean;
  idCampeonato: string;
  zona: string;
  tipoZona: number;
  pGanados: number;
  pEmpatados: number;
  pPerdidos: number;
  pJugados: number;
  golesAFavor: number;
  golesEnContra: number;
  difGoles: number;
  puntos: number;
  posicionEnTabla: number;
  comentarios: Array<object>;
}
