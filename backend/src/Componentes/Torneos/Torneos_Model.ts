import {model, Schema} from 'mongoose';
import ITorneos from './Torneos_Interface';

const TorneosSchema = new Schema({
  tituloTorneo: String,
  fechaInicio: Date,
  fechaFin: Date,
  idCategoria: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloCategorias',
    },
  ],
  // idSubcategoria: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'modeloSubcategorias',
  //   },
  // ],
  tipoTorneo: Number,
});

export default model<ITorneos>('modeloTorneos', TorneosSchema);
