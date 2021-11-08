import { model, Schema } from 'mongoose';
import IEquipos from './Equipos_Interface';

const EquiposSchema = new Schema({
	nombreClub: { type: String },
	escudo: { type: String },
	pGanados: { type: Number },
	pEmpatados: { type: Number },
	pPerdidos: { type: Number },
	pJugados: { type: Number },
	golesAFavor: { type: Number },
	golesEnContra: { type: Number },
	difGoles: { type: Number },
	puntos: { type: Number },
	posicionEnTabla: { type: Number },
	isEliminado: { type: Boolean, default: false },
	idCategorias: [
		{ type: Schema.Types.ObjectId, ref: 'modeloCategorias', required: true },
	],
	idSubcategorias: [
		{ type: Schema.Types.ObjectId, ref: 'modeloSubcategorias', required: true },
	],
});

export default model<IEquipos>('modeloEquipos', EquiposSchema);
