import {Document} from 'mongoose';

export default interface IUsuarios extends Document {
  _id: string;
  email: string;
  nombreUsuario: string;
  password: string;
  keyRol: number;
  token: string;
  isRecuperarContrase├▒a: boolean;
  isActivo: boolean;
}
