import {model, Schema} from 'mongoose';
import IVivo from './Vivo_Interface';

const VivoSchema = new Schema({
  urlVivo: String,
  urlChat: String,
  nombreVivo: String,
  isActivo: {type: Boolean, default: true},
  fechaCreacion: Date,
  fechaModificacion: Date,
});
export default model<IVivo>('modeloVivo', VivoSchema);
