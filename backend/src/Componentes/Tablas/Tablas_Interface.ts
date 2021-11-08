import { Document } from 'mongoose';

export default interface ITablas extends Document {
	_id: string;
	idCampeonato: string;
	zona: string;
	tipoZona: number;
	comentarios: Array<object>;
}
