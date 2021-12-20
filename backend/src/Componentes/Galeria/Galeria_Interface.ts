import {Document} from 'mongoose';
import IImagenes from '../Imagenes/Imagenes_Interface';

export default interface IGaleria extends Document {
  tituloGaleria: string;
  // imagenesId: IImagenes['_id'];
  fechaCarga: Date;
  fechaModificacion: Date;
  // videosId: Array<string>;
}
