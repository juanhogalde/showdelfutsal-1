import {model, Schema} from 'mongoose';
import ISubcategorias from './Subcategorias_Interface';

const SubcategoriasSchema = new Schema({
  nombreSubcategoria: {type: String},
  keySubcategoria: {type: Number},
  idCategoria: {type: Schema.Types.ObjectId, ref: 'modeloCategorias'},
});

export default model<ISubcategorias>('modeloSubcategorias', SubcategoriasSchema);
