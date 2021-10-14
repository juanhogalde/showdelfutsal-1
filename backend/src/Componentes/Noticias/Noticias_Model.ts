import {model, Schema} from 'mongoose';
import INoticias from './Noticias_Interface';

const NoticiasSchema = new Schema({
  fecha: {type: Date},
  titulo: {type: String},
  copete: {type: String},
  cuerpo: {type: String},
  idEtiquetas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloEtiquetas',
    },
  ],
  idCategoria: {
    type: Schema.Types.ObjectId,
    ref: 'modeloCategorias',
    required: true,
  },
  idSubcategoria: {
    type: Schema.Types.ObjectId,
    ref: 'modeloSubcategorias',
    required: true,
  },
  keyCategoria: {type: Number},
  keySubcategoria: {type: Number},
  isDestacada: {type: Boolean},
  autor: {type: String},
  idImagen: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloImagenes',
    },
  ],
});

export default model<INoticias>('modeloNoticias', NoticiasSchema);
