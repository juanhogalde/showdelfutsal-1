import {model, Schema} from 'mongoose';
import ICategorias from './Categorias_Interface';

const CategoriasSchema = new Schema({
  _id: {type: String},
  nombreCategoria: {type: String},
  keyCategoria: {type: Number},
});

export default model<ICategorias>('modeloCategorias', CategoriasSchema);
