import mongoose from 'mongoose';

export class baseMongo {
  private db = mongoose.connection;

  private _options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  private _cadenaDeConexion = 'mongodb://localhost:27017/Desarrollo';

  constructor(cadenaNueva?: string) {
    this._cadenaDeConexion = cadenaNueva ? cadenaNueva : this._cadenaDeConexion;
    this.conectar();
    this.configEventos();
  }

  conectar() {
    mongoose.connect(this._cadenaDeConexion, this._options);
  }
  eliminarColeccion(nombreColeccion: string) {
    this.db.dropCollection(nombreColeccion, function (err: any) {
      if (err) {
        throw new Error(err.message);
      } else {
        console.log(`coleccion ${nombreColeccion} fue eliminada `);
      }
    });
  }
  configEventos() {
    this.db.once('open', _ => {
      console.info('BD de ' + process.env.NODE_ENV + ' conectada');
    });

    //En caso de error
    this.db.on('error', err => {
      this.db.close();
      console.error(`BD ERROR:${err}`);
    });
  }
}
