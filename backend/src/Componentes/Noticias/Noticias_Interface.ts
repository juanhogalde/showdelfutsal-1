import {Document} from 'mongoose';

export default interface INoticias extends Document {
  fecha: Date;
  titulo: string;
  copete: string;
  cuerpo: string;
  tags: Array<string>;
  idCategoria: string;
  idSubcategoria: string;
  keyCategoria: number;
  keySubcategoria: number;
  isDestacada: boolean;
  autor: string;
  idImagen: Array<string>;
}
