import {model, Schema} from 'mongoose';
import IPublicidades from './Publicidades_Interface';

const PublicidadesSchema = new Schema({
  nombrePublicidad: {type: String, unique: true, required: true},
  ancho: {type: Number},
  alto: {type: Number},
  isActiva: {type: Boolean, default: false},
  ubicacion: {type: String, unique: true, required: true},
  direccion: {type: String},
  idImagen: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloImagenes',
    },
  ],
});

export default model<IPublicidades>('modeloPublicidades', PublicidadesSchema);
