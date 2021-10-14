import * as jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import responder from '../Middlewares/responder';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;
  let clavePrivada = process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET : '';

  try {
    jwtPayload = <any>jwt.verify(token, clavePrivada);
    res.locals.jwtPayload = jwtPayload;
    next();
  } catch (error) {
    responder.noAutorizado(req, res);
    return;
  }
};
