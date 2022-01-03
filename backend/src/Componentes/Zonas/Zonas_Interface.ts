import {Document} from 'mongoose';
import ISubcategorias from '../Subcategorias/Subcategorias_Interface';

export default interface IZona extends Document {
  nombreZona: string;
  tipo: number;
  idSubcategoria: ISubcategorias['_id'];
}
