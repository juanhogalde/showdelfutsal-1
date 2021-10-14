import {model, Schema} from 'mongoose';
import ISubcategorias from './Subcategorias_Interface';

const SubcategoriasSchema = new Schema({
  Subcategoria: {type: String},
  keySuncategoria: Number,
  idCategoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias',
    required: true,
  },
});

export default model<ISubcategorias>('modeloSubcategorias', SubcategoriasSchema);
