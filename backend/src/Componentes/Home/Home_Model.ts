import {model, ObjectId, Schema} from 'mongoose';
import IHomes from './Home_Interface';

const HomesSchema = new Schema({
  vivo: String,
  isVivoActivo: Boolean,
  idPublicidadesInicio: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloPublicidades',
    },
  ],
});

export default model<IHomes>('modeloHomes', HomesSchema);
