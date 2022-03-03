import {model, Schema} from 'mongoose';
import IPublicidades from './Publicidades_Interface';

const PublicidadesSchema = new Schema({
  nombrePublicidad: {type: String, unique: true, required: true},
  isActiva: {type: Boolean, default: false},
  idMedidas: [
    {
      type: Schema.Types.String,
      ref: 'modeloMedidasPublicidades',
    },
  ],
  idImagen: [
    {
      type: Schema.Types.String,
      ref: 'modeloImagenes',
    },
  ],
  fecha: {type: Date},
});

export default model<IPublicidades>('modeloPublicidades', PublicidadesSchema);
