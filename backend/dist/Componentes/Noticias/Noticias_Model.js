"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const NoticiasSchema = new mongoose_1.Schema({
    fecha: { type: Date },
    fechaModificacion: { type: Date },
    urlNoticia: String,
    titulo: { type: String },
    copete: { type: String },
    cuerpo: { type: String },
    idEtiquetas: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloEtiquetas',
        },
    ],
    idCategoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloCategorias',
    },
    idSubcategoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloSubcategorias',
    },
    keyCategoria: { type: Number },
    keySubcategoria: { type: Number },
    isDestacada: { type: Boolean },
    autor: { type: String },
    idImagen: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloImagenes',
        },
    ],
});
NoticiasSchema.plugin(mongoose_paginate_v2_1.default);
exports.default = (0, mongoose_1.model)('modeloNoticias', NoticiasSchema);
