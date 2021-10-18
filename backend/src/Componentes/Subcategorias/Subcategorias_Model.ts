import {model, Schema} from 'mongoose';
import ISubcategorias from './Subcategorias_Interface';

const SubcategoriasSchema = new Schema({
  nombreSubcategoria: {type: String},
  keySubcategoria: {type: Number},
});

export default model<ISubcategorias>('modeloSubcategorias', SubcategoriasSchema);
