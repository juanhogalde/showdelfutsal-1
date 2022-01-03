import {model, Schema} from 'mongoose';
import IZona from './Zonas_Interface';

const ZonasSchema = new Schema({
  nombreZona: String,
  tipo: Number,
  idSubcategoria: {type: Schema.Types.ObjectId, ref: 'modeloSubcategorias'},
});

export default model<IZona>('modeloZonas', ZonasSchema);
