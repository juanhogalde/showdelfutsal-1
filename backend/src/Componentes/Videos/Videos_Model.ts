import {model, Schema} from 'mongoose';
import IVideos from './Videos_Interface';

const VideosSchema = new Schema({
  fuente: String,
  descripcion: String,
  fechaCarga: Date,
});

export default model<IVideos>('modeloVideos', VideosSchema);
