import {model, Schema} from 'mongoose';
import IEquipos from './Equipos_Interface';

const EquiposSchema = new Schema({
  nombreClub: {type: String},
  escudo: {type: String},
  idSubcategorias: [{type: Schema.Types.String, ref: 'modeloSubcategorias', required: true}],
});

export default model<IEquipos>('modeloEquipos', EquiposSchema);
