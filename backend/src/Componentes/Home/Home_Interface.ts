import {Document} from 'mongoose';

export default interface IHomes extends Document {
  vivo: string;
  isVivoActivo: boolean;
  idPublicidadesInicio: Array<string>;
}
