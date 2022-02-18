import {model, Schema, Error} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({
  idEquipoLocal: {type: Schema.Types.ObjectId, ref: 'modeloEquipos', required: true},
  idEquipoVisitante: {type: Schema.Types.ObjectId, ref: 'modeloEquipos', required: true},
  resultadoLocal: {type: Number},
  resultadoVisitante: {type: Number},
  penalesLocal: {type: Number},
  penalesVisitante: {type: Number},
  fechaPorJugar: {type: Number},
  fechaPartido: {type: Date},
  estadio: String,
  posicionFixture: {type: Number},
  comentarios: [
    {
      color: {type: String},
      texto: {type: String},
    },
  ],
  idZona: {type: Schema.Types.ObjectId, ref: 'modeloZonas', required: true},
  idTorneo: {type: Schema.Types.ObjectId, ref: 'modeloTorneos', required: true},
});
PartidosSchema.pre('validate', function (next) {
  this.populate('idZona').then(function (respuesta: any) {
    if (!respuesta.idZona) {
      var ValidationError = Error.ValidationError;
      var error = new ValidationError(respuesta);
      error.errors['validate'] = new Error.ValidatorError({});
      error.errors['validate'].message = 'zona no encontrada';
      error.errors['validate'].value = 400;
      next(error);
    } else {
      const idEquipos = respuesta.idZona.equipos.map((equipo: any) => {
        return equipo._id.toString();
      });
      if (
        !idEquipos.includes(respuesta.idEquipoLocal.toString()) ||
        !idEquipos.includes(respuesta.idEquipoVisitante.toString())
      ) {
        var ValidationError = Error.ValidationError;
        var error = new ValidationError(respuesta);
        error.errors['validate'] = new Error.ValidatorError({});
        error.errors['validate'].message = 'Algun equipo no pertece a esta zona';
        error.errors['validate'].value = 400;
        next(error);
      } else {
        next();
      }
    }
  });
});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
