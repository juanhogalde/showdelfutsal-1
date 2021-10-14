import {Document} from 'mongoose';

export default interface INoticias extends Document {
  fecha: Date;
  titulo: string;
  copete: string;
  cuerpo: string;
  tags: string;
  idCategoria: string;
  idSubcategoria: string;
  isDestacada: boolean;
  autor: string;
  imagenes: [
    {
      imagen: string;
      epigrafe: string;
    }
  ];
}
