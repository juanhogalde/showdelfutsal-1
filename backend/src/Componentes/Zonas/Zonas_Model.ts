import {model, Schema} from 'mongoose';
import IZona from './Zonas_Interface';

const ZonasSchema = new Schema({
  nombreZona: String,
  tipoZona: Number,
  idSubcategoria: {type: Schema.Types.String, ref: 'modeloSubcategorias'},
  idCategoria: {type: Schema.Types.String, ref: 'modeloCategorias'},
  equipos: [
    {
      _id: {type: Schema.Types.String, ref: 'modeloEquipos'},
      partidosG: {type: Number, default: 0},
      partidosE: {type: Number, default: 0},
      partidosP: {type: Number, default: 0},
      partidosJ: {type: Number, default: 0},
      golesAFavor: {type: Number, default: 0},
      golesEnContra: {type: Number, default: 0},
      puntos: {type: Number, default: 0},
      isEliminado: {type: Boolean, default: false},
      comentarios: [
        {
          color: {type: String},
          texto: {type: String},
        },
      ],
    },
  ],
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos'},
});
ZonasSchema.post('save', function (doc, next) {
  doc.populate('equipos._id').then(function () {
    next();
  });
});

export default model<IZona>('modeloZonas', ZonasSchema);
