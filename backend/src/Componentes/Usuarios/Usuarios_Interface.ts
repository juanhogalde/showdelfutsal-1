import {Document} from 'mongoose';

export default interface IUsuarios extends Document {
  _id: string;
  nombreUsuario: string;
  password: string;
  keyRol: number;
  token: string;
  isActivo: boolean;
}