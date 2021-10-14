import {model, Schema} from 'mongoose';
import INoticias from './Noticias_Interface';

const NoticiasSchema = new Schema({
  fecha: {type: Date},
  titulo: {type: String},
  copete: {type: String},
  cuerpo: {type: String},
  tags: {type: String},
  idCategoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias',
    required: true,
  },
  idSubcategoria: {
    type: Schema.Types.ObjectId,
    ref: 'subcategorias',
    required: true,
  },
  isDestacada: {type: Boolean},
  autor: {type: String},
  imagenes: [
    {
      imagen: {type: String},
      epigrafe: {type: String},
    },
  ],
});

export default model<INoticias>('modeloNoticias', NoticiasSchema);
