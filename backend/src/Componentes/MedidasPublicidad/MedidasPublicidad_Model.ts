import {model, Schema} from 'mongoose';
import IMedidasPublicidad from './MedidasPublicidad_Interface';
const MedidasPublicidadSchema = new Schema({
  ancho: {type: Number},
  alto: {type: Number},
  ubicacion: {type: String},
  direccion: {type: String},
  keyMedidas: {type: Number},
});
export default model<IMedidasPublicidad>('modeloMedidasPublicidad', MedidasPublicidadSchema);
