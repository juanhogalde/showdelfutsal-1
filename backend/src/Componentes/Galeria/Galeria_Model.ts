import {model, Schema} from 'mongoose';
import IGaleria from './Galeria_Interface';

const GaleriaSchema = new Schema({
  tituloGaleria: String,
  // imagenesId: [{type: Schema.Types.ObjectId, ref: 'modeloImagenes'}],
  fechaCarga: Date,
  fechaModificacion: Date,
  // videosId: [{type: Schema.Types.ObjectId, ref: 'modeloVideos'}],
});

export default model<IGaleria>('modeloGaleria', GaleriaSchema);
