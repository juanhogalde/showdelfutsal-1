import {model, Schema} from 'mongoose';
import IEquipos from './Equipos_Interface';

const EquiposSchema = new Schema({
  _id: {type: String},
  nombreClub: {type: String},
  escudo: {type: String},
  keySubcategorias: Array,
  idSubcategorias: [{type: Schema.Types.String, ref: 'modeloSubcategorias', required: true}],
});

export default model<IEquipos>('modeloEquipos', EquiposSchema);
