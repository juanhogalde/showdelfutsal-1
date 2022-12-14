import {model, Schema} from 'mongoose';
import INoticias from './Noticias_Interface';
import mongoosePaginate from 'mongoose-paginate-v2';

const NoticiasSchema = new Schema({
  _id: {type: String},
  fecha: {type: Date},
  fechaModificacion: {type: Date},
  urlNoticia: String,
  titulo: {type: String, unique: true},
  copete: {type: String},
  cuerpo: {type: String},
  idEtiquetas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloEtiquetas',
    },
  ],
  idCategoria: {
    type: Schema.Types.String,
    ref: 'modeloCategorias',
  },
  idSubcategoria: {
    type: Schema.Types.String,
    ref: 'modeloSubcategorias',
  },
  keyCategoria: {type: Number},
  keySubcategoria: {type: Number},
  isDestacada: {type: Boolean, default: false},
  autor: {type: String},
  idImagen: [
    {
      type: Schema.Types.String,
      ref: 'modeloImagenes',
    },
  ],
});

NoticiasSchema.plugin(mongoosePaginate);

export default model<INoticias>('modeloNoticias', NoticiasSchema);
