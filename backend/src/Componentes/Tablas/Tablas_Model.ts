import { model, Schema } from 'mongoose';
import ITablas from './Tablas_Interface';

const TablasSchema = new Schema({
	idEquipos: [
		{
			type: Schema.Types.ObjectId,
			ref: 'modeloEquipos',
		},
	],
	idCampeonato: {
		type: Schema.Types.ObjectId,
		ref: 'modeloCampeonatos',
	},
	zona: { type: String },
	tipoZona: { type: Number },
	comentarios: [
		{
			color: { type: String },
			texto: { type: String },
		},
	],
});

export default model<ITablas>('modeloTablas', TablasSchema);
