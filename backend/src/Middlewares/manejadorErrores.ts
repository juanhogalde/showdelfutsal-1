import responder from './responder';
import {Request, Response, NextFunction} from 'express';

const manejadorErrores = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.path) {
    responder.error(req, res, error, `${error.name}: ${error.message} // Path: ${error.path}`, 400);
  } else {
    responder.error(req, res, error);
  }
};

export default manejadorErrores;
