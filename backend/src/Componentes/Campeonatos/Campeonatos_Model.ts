import {model, Schema} from 'mongoose';
import ICampeonatos from './Campeonatos_Interface';

const CampeonatosSchema = new Schema({
  tituloCampeonato: String,
  fechaInicio: Date,
  fechaFin: Date,
  idCategoria: {
    type: Schema.Types.ObjectId,
    ref: 'modeloCategorias',
    required: true,
  },
  idSubcategoria: [
    {
      type: Schema.Types.ObjectId,
      ref: 'modeloSubcategorias',
      required: true,
    },
  ],
});

export default model<ICampeonatos>('modeloCampeonatos', CampeonatosSchema);
