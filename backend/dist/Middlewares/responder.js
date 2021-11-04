"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responder = {
    sucess: (req, res, value, message, status) => {
        let statusCode = status || 200;
        let statusMessage = message || 'ok';
        res.status(statusCode).json({
            error: false,
            status: statusCode,
            message: statusMessage,
            value: value,
        });
    },
    error: (req, res, err, message, status) => {
        let statusCode = status || 500;
        let statusMessage = message || 'Error interno del servidor.';
        let errorObject = err || {};
        console.error(errorObject);
        res.status(statusCode).json({
            error: true,
            status: statusCode,
            message: statusMessage,
        });
    },
    noAutorizado: (req, res) => {
        let statusCode = 401;
        res.status(statusCode).json({
            error: true,
            status: statusCode,
            message: 'No posee autorización para acceder a la ruta solicitada.',
        });
    },
    noEncontrado: (req, res) => {
        let statusCode = 404;
        res.status(statusCode).json({
            error: true,
            status: statusCode,
            message: 'Ruta inexistente.',
        });
    },
};
exports.default = responder;
