"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VivoSchema = new mongoose_1.Schema({
    urlVivo: String,
    urlChat: String,
    nombreVivo: String,
    isActivo: { type: Boolean, default: true },
    fechaCreacion: Date,
    fechaModificacion: Date,
});
exports.default = (0, mongoose_1.model)('modeloVivo', VivoSchema);
