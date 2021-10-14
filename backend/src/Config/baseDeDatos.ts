import mongoose from 'mongoose';

const db = mongoose.connection;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
};

const cadenaDeConexion =
  process.env.NODE_ENV == 'desarrollo'
    ? 'mongodb://localhost:29017/PCSSJ-Desarrollo'
    : (process.env.DATABASE as string);

mongoose
  .connect(cadenaDeConexion, options)
  .catch(err => console.error(`ERROR DE CONEXION A BD: ${err}`));

//En caso de conectarse
db.once('open', _ => {
  console.log('BD de ' + process.env.NODE_ENV + ' conectada');
});

//En caso de error
let reintentos = 0;
db.on('error', err => {
  db.close();
  console.error(`BD ERROR:${err}`);
});

export default db;
