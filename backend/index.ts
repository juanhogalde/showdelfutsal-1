import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {Request, Response} from 'express';
const app = express();
import cors = require('cors');

const paginasRouter = require('./src/Paginas/Paginas_Router');
const noticiasRouter = require('./src/Noticias/Noticias_Router');
const equiposRouter = require('./src/Equipos/Equipos_Router');
const categoriasRouter = require('./src/Categorias/Categorias_Router');
const subcategoriasRouter = require('./src/Subcategorias/Subcategorias_Router');
const publicidadesRouter = require('./src/Publicidades/Publicidades_Router');
const campeonatoRouter = require('./src/Campeonato/Campeonato_Router');
const zonasRouter = require('./src/Zonas/Zonas_Router');
const partidosRouter = require('./src/Partidos/Partidos_Router');
const usuariosRouter = require('./src/Usuarios/Usuarios_Router');

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`⚡️[FUTSAL]: El servidor esta corriendo en http://localhost:${process.env.PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      `<!DOCTYPE html><html lang="es"><body><h2>Servidor corriendo</h2> <iframe src="https://giphy.com/embed/phGElmSM4P0sg" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p><br> </body></html>`
    );
});

app.use('/paginas', paginasRouter);
app.use('/noticias', noticiasRouter);
app.use('/equipos', equiposRouter);
app.use('/categorias', categoriasRouter);
app.use('/subcategorias', subcategoriasRouter);
app.use('/publicidades', publicidadesRouter);
app.use('/campeonato', campeonatoRouter);
app.use('/zonas', zonasRouter);
app.use('/partidos', partidosRouter);
app.use('/usuarios', usuariosRouter);
