import {model, Schema, Document} from 'mongoose';

export interface INoticias extends Document {
  _id: string;
  fecha: Date;
  titulo: string;
  copete: string;
  cuerpo: string;
  tags: string;
  categoria: string;
  subcategoria: string;
  isDestacada: boolean;
  autor: string;
  imagenes: [
    {
      imagen: string;
      epigrafe: string;
    }
  ];
}

const NoticiasSchema = new Schema({
  fecha: {type: Date},
  titulo: {type: String},
  copete: {type: String},
  cuerpo: {type: String},
  tags: {type: String},
  categoria: {
    type: Schema.Types.ObjectId,
    ref: 'categorias',
    required: true,
  },
  subcategoria: {
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

export default model<INoticias>('noticias', NoticiasSchema);
