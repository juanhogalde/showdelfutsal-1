import {model, Schema} from 'mongoose';
import IMedidasPublicidad from './MedidasPublicidad_Interface';
const MedidasPublicidadSchema = new Schema({
  _id: {type: String},
  ancho: {type: Number},
  alto: {type: Number},
  ubicacion: {type: String},
  direccion: {type: String},
  keyMedidas: {type: Number},
  disponible: {type: Boolean, default: true},
});
export default model<IMedidasPublicidad>('modeloMedidasPublicidades', MedidasPublicidadSchema);
