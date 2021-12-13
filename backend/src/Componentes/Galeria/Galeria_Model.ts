import {model, Schema} from 'mongoose';
import IGaleria from './Galeria_Interface';

const GaleriaSchema = new Schema({
  tituloGaleria: String,
  // imagenesId: [{type: Schema.Types.ObjectId, ref: 'modeloImagenes'}],
  fechaCarga: Date,
  fechaModificacion: Date,
});

export default model<IGaleria>('modeloGaleria', GaleriaSchema);
