import {model, Schema} from 'mongoose';
import IPublicidades from './Publicidades_Interface';

const PublicidadesSchema = new Schema({
  nombrePublicidad: {type: String, unique: true, required: true},
  ancho: Number,
  alto: Number,
  isActiva: {type: Boolean, default: false},
  ubicacion: {type: String, unique: true, required: true},
  direccion: String,
});

export default model<IPublicidades>('modeloPublicidades', PublicidadesSchema);
