"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responder_1 = __importDefault(require("./responder"));
const manejadorErrores = (error, req, res, next) => {
    if (error.path) {
        responder_1.default.error(req, res, error, `${error.name}: ${error.message} // Path: ${error.path}`, 400);
    }
    else {
        responder_1.default.error(req, res, error);
    }
};
exports.default = manejadorErrores;
