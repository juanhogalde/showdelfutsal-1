import {Document} from 'mongoose';
import IEquipos from '../Equipos/Equipos_Interface';
import IEstadios from '../Estadios/Estadios_Interface';
import ITablas from '../Tablas/Tablas_Interface';
import IZonas from '../Zonas/Zonas_Interface';
export default interface IPartidos extends Document {
  _id: string;
  equipoLocal: IEquipos['_id'];
  equipoVisitante: IEquipos['_id'];
  fechaPorJugar: number;
  fechaPartido: Date;
  horaPartido: string;
  idEstadio: IEstadios['_id'];
  posicionFixture: number;
  comentarios: Array<object>;
  // campeonato: string;
  idTabla: ITablas['_id'];
  resultadoLocal: number;
  resultadoVisitante: number;
  penalesLocal: number;
  penalesVisitante: number;
  idZona: IZonas['_id'];
}
