import {model, Schema} from 'mongoose';
import IVideos from './Videos_Interface';

const VideosSchema = new Schema({
  _id: {type: String},
  fuente: String,
  descripcion: String,
  fechaCarga: Date,
  idGaleria: {
    type: Schema.Types.String,
    ref: 'modeloGaleria',
  },
});
export default model<IVideos>('modeloVideos', VideosSchema);
