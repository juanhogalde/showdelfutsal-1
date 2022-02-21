import {model, Schema} from 'mongoose';
import IImagenes from './Imagenes_Interface';

const ImagenesSchema = new Schema({
  _id: {type: String},
  fuente: {type: String},
  alto: {type: Number},
  ancho: {type: Number},
  descripcion: {type: String},
  isGaleria: {type: Boolean, default: false},
  galeriaId: {type: Schema.Types.ObjectId, ref: 'modeloGaleria'},
  fechaCarga: {type: Date},
});

export default model<IImagenes>('modeloImagenes', ImagenesSchema);
