import {model, Schema} from 'mongoose';
import INoticias from './Noticias_Interface';

const NoticiasSchema = new Schema({
  fecha: {type: Date},
  fechaModificacion: {type: Date},
  urlNoticia: String,
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
  },
  idSubcategoria: {
    type: Schema.Types.ObjectId,
    ref: 'modeloSubcategorias',
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
