import {model, Schema} from 'mongoose';
import ISubcategorias from './Subcategorias_Interface';

const SubcategoriasSchema = new Schema({
  _id: {type: String},
  nombreSubcategoria: {type: String},
  keySubcategoria: {type: Number},
  keyCategoria: {type: Number, required: true},
});

export default model<ISubcategorias>('modeloSubcategorias', SubcategoriasSchema);
