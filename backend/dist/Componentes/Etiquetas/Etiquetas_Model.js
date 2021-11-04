"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EtiquetasSchema = new mongoose_1.Schema({
    tag: { type: String, unique: true },
});
exports.default = (0, mongoose_1.model)('modeloEtiquetas', EtiquetasSchema);
