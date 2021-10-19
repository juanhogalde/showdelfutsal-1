import {model, Schema} from 'mongoose';
import ICategorias from './Categorias_Interface';

const CategoriasSchema = new Schema({
  nombreCategoria: {type: String},
  keyCategoria: {type: Number},
  idSubcategorias: [{type: Schema.Types.ObjectId, ref: 'modeloSubcategorias'}],
});

export default model<ICategorias>('modeloCategorias', CategoriasSchema);