import {Document} from 'mongoose';

export default interface IVideos extends Document {
  _id: string;
  fuente: string;
  descripcion: string;
  fechaCarga: Date;
}
