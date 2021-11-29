import {Document} from 'mongoose';
import IVideos from '../Componentes/Videos/Videos_Interface';
import IImagenes from '../Componentes/Imagenes/Imagenes_Interface';

export default interface IGaleria extends Document {
  tituloGaleria: String;
  imagenesId: IImagenes['_id'];
  videosId: IVideos['_id'];
  fechaCarga: Date;
  fechaModificacion: Date;
}
