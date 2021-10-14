import {model, Schema} from 'mongoose';
import IEquipos from './Equipos_Interface';

const EquiposSchema = new Schema({
  nombreClub: {type: String},
  escudo: {type: String},
  idCategoria: [{type: Schema.Types.ObjectId, ref: 'categorias', required: true}],
  idSubcategorias: [{type: Schema.Types.ObjectId, ref: 'categorias', required: true}],
});

export default model<IEquipos>('modeloEquipos', EquiposSchema);
