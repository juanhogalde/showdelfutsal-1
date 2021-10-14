import {Document} from 'mongoose';

export default interface IUsuarios extends Document {
  _id: string;
  nombreUsuario: string;
  keyRol: number;
  token: string;
}
