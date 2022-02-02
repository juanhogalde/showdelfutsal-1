import {model, Schema} from 'mongoose';
import ITorneos from './Torneos_Interface';

const TorneosSchema = new Schema({
  tituloTorneo: String,
  fechaInicio: Date,
  fechaFin: Date,
  idCategoria: [
    {
      type: Schema.Types.String,
      ref: 'modeloCategorias',
    },
  ],
  idSubcategoria: [
    {
      type: Schema.Types.String,
      ref: 'modeloSubcategorias',
    },
  ],
  tipoTorneo: Number,
});
TorneosSchema.post('save', function (doc, next) {
  doc.populate('idSubcategoria').then(function () {
    next();
  });
});

export default model<ITorneos>('modeloTorneos', TorneosSchema);
