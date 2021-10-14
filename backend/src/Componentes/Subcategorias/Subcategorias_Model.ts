import {model, Schema} from 'mongoose';
import ISubcategorias from './Subcategorias_Interface';

const SubcategoriasSchema = new Schema({
  nombreSubcategoria: {type: String},
  keySubcategoria: Number,
});

export default model<ISubcategorias>('modeloSubcategorias', SubcategoriasSchema);
