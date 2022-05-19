import {model, Schema} from 'mongoose';
import IGaleria from './Galeria_Interface';

const GaleriaSchema = new Schema({
  _id: String,
  tituloGaleria: String,
  // imagenesId: [{type: Schema.Types.ObjectId, ref: 'modeloImagenes'}],
  fechaCarga: Date,
  fechaModificacion: Date,
  idCategoria: {
    type: Schema.Types.String,
    ref: 'modeloCategorias',
  },
  keyCategoria: {type: Number},
  videosId: [{type: Schema.Types.ObjectId, ref: 'modeloVideos'}],
});

export default model<IGaleria>('modeloGaleria', GaleriaSchema);