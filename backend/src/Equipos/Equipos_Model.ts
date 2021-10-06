import {model, Schema, Document} from 'mongoose';

export interface IEquipos extends Document {
  nombreClub: string;
  escudo: string;
  categoria: [string];
  subcategorias: [string];
}

const EquiposSchema = new Schema({
  nombreClub: {type: String},
  escudo: {type: String},
  categoria: [{type: Schema.Types.ObjectId, ref: 'categorias', required: true}],
  subcategorias: [{type: Schema.Types.ObjectId, ref: 'categorias', required: true}],
});

export default model<IEquipos>('equipos', EquiposSchema);
