import {Document} from 'mongoose';

export default interface IPublicidades extends Document {
  _id: string;
  nombrePublicidad: string;
  ancho: number;
  alto: number;
  isActiva: boolean;
  ubicacion: string;
  direccion: string;
  idImagen: Array<string>;
}
