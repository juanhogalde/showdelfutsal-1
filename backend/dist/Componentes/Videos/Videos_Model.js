"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VideosSchema = new mongoose_1.Schema({
    fuente: String,
    descripcion: String,
    fechaCarga: Date,
});
exports.default = (0, mongoose_1.model)('modeloVideos', VideosSchema);
