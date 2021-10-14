import {Document} from 'mongoose';

export default interface IEtiquetas extends Document {
  _id: string;
  tag: string;
}
