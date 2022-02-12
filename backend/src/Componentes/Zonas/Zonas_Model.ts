import {model, Schema} from 'mongoose';
import IZona from './Zonas_Interface';

const ZonasSchema = new Schema({
  nombreZona: String,
  tipoZona: Number,
  idSubcategoria: {type: Schema.Types.String, ref: 'modeloSubcategorias'},
  idCategoria: {type: Schema.Types.String, ref: 'modeloCategorias'},
  equipos: [
    {
      _id: {type: Schema.Types.ObjectId, ref: 'modeloEquipos'},
      partidosG: {type: Number},
      partidosE: {type: Number},
      PartidosP: {type: Number},
      PartidosJ: {type: Number},
      golesAFavor: {type: Number},
      golesEnContra: {type: Number},
      difGoles: {type: Number},
      puntos: {type: Number},
      posicionEnTabla: {type: Number},
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
  doc.populate('idSubcategoria').then(function () {
    next();
  });
});

export default model<IZona>('modeloZonas', ZonasSchema);
