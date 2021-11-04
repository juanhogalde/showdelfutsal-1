"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TablasSchema = new mongoose_1.Schema({
    equipo1: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloEquipos',
    },
    equipo2: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloEquipos',
    },
    isEquipo2Eliminado: { type: Boolean },
    idCampeonato: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloCampeonatos',
    },
    zona: { type: String },
    tipoZona: { type: Number },
    pGanados: { type: Number },
    pEmpatados: { type: Number },
    pPerdidos: { type: Number },
    pJugados: { type: Number },
    golesAFavor: { type: Number },
    golesEnContra: { type: Number },
    difGoles: { type: Number },
    puntos: { type: Number },
    posicionEnTabla: { type: Number },
    comentarios: [
        {
            color: { type: String },
            texto: { type: String },
        },
    ],
});
exports.default = (0, mongoose_1.model)('modeloTablas', TablasSchema);
