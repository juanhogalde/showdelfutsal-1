import {Document} from 'mongoose';
import IGaleria from '../Galeria/Galeria_Interface';

export default interface IVideos extends Document {
  _id: string;
  fuente: string;
  descripcion: string;
  fechaCarga: Date;
  idGaleria: IGaleria['_id'];
}
