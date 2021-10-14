import {model, Schema} from 'mongoose';
import IEquipos from './Equipos_Interface';

const EquiposSchema = new Schema({
  nombreClub: {type: String},
  escudo: {type: String},
  idCategorias: [{type: Schema.Types.ObjectId, ref: 'modeloCategorias', required: true}],
  idSubcategorias: [{type: Schema.Types.ObjectId, ref: 'modeloSubcategorias', required: true}],
});

export default model<IEquipos>('modeloEquipos', EquiposSchema);
