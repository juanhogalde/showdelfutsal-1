import { Document } from 'mongoose';

export default interface IEquipos extends Document {
	_id: string;
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
	idCategorias: [string];
	idSubcategorias: [string];
}
