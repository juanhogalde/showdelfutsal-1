import {Document} from 'mongoose';
import ISubcategorias from '../Subcategorias/Subcategorias_Interface';
import ICategorias from '../Categorias/Categorias_Interface';
import IEquipos from '../Equipos/Equipos_Interface';
export default interface IZona extends Document {
  nombreZona: string;
  tipoZona: number;
  idSubcategoria: ISubcategorias['_id'];
  idCategoria: ICategorias['_id'];
  equpos: Array<IEquipos['_id']>;
}
