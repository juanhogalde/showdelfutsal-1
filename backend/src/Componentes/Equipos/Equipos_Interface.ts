import {Document} from 'mongoose';

export default interface IEquipos extends Document {
  nombreClub: string;
  escudo: string;
  pGanados: number;
  pEmpatados: number;
  pPerdidos: number;
  pJugados: number;
  golesAFavor: number;
  golesEnContra: number;
  difGoles: number;
  puntos: number;
  posicionEnTabla: number;
  isEliminado: boolean;
  idCategorias: [string];
  idSubcategorias: [string];
}
