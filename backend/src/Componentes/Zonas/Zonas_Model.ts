import {model, Schema} from 'mongoose';
import IZona from './Zonas_Interface';

const ZonasSchema = new Schema({
  nombreZona: String,
  tipoZona: Number,
  idSubcategoria: {type: Schema.Types.ObjectId, ref: 'modeloSubcategorias'},
  idCategoria: {type: Schema.Types.ObjectId, ref: 'modeloCategorias'},
  equipos: [{type: Schema.Types.ObjectId, ref: 'modeloEquipos'}],
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos'},
});

// ZonasSchema.pre('save', function (next) {
//   const data = this;
// });

export default model<IZona>('modeloZonas', ZonasSchema);
