import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {Request, Response} from 'express';
const app = express();
import cors = require('cors');

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
