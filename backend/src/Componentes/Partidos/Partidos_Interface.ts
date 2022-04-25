import {Document, Types} from 'mongoose';
import IEquipos from '../Equipos/Equipos_Interface';
import ITorneos from '../Torneos/Torneos_Interface';
import IZonas from '../Zonas/Zonas_Interface';
export default interface IPartidos extends Document {
  _id: string;
  idEquipoLocal: IEquipos['_id'];
  idEquipoVisitante: IEquipos['_id'];
  resultadoLocal: number;
  resultadoVisitante: number;
  penalesLocal: number;
  penalesVisitante: number;
  fechaPorJugar: number;
  fechaPartido: Date;
  estadio: string;
  posicionFixture: number;
  comentarios: Array<object>;
  idZona:Types.ObjectId;
  idTorneo: Types.ObjectId
}
