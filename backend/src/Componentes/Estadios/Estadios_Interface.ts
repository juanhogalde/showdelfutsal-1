import {Document} from 'mongoose';

export default interface IEstadios extends Document {
  _id: string;
  nombreEstadio: string;
  direccion: string;
}
