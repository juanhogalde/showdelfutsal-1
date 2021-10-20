import fs from 'fs';
import {Request, Response} from 'express';
import {noticiasController} from '../Componentes/Noticias/Noticias_Controller';
const path = require('path');

export const importarDatos = (req: Request, res: Response) => {
  const rutaArchivo = path.join(__dirname, '../../archivos/wp_posts.json');
  fs.readFile(rutaArchivo, 'utf-8', async (error: any, data: any) => {
    if (error) throw new Error(error);

    const dataJSON = JSON.parse(data);
    let arregloDatos = [];

    for await (const item of dataJSON) {
      if (item.type === 'table' && item.data) {
        for await (const data of item.data) {
          arregloDatos.push(data);
        }
      }
    }

    if (arregloDatos.length) {
      noticiasController.importarNoticias(arregloDatos, req, res);
    }
  });
};
