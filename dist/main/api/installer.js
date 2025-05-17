"use strict";
// This file contains functions to handle the installation process of the selected modpack, including downloading and extracting files.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installModpack = void 0;
const electron_1 = require("electron");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const tar_1 = require("tar");
const fs_2 = require("fs");
const downloadFile = (url, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
    const writer = (0, fs_2.createWriteStream)(outputPath);
    const response = yield (0, axios_1.default)({
        url,
        method: 'GET',
        responseType: 'stream',
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
});
const installModpack = (modpackUrl, installDir) => __awaiter(void 0, void 0, void 0, function* () {
    const modpackName = path_1.default.basename(modpackUrl);
    const outputPath = path_1.default.join(electron_1.app.getPath('temp'), modpackName);
    try {
        yield downloadFile(modpackUrl, outputPath);
        yield (0, tar_1.extract)({
            file: outputPath,
            cwd: installDir,
        });
        fs_1.default.unlinkSync(outputPath); // Clean up the downloaded file
    }
    catch (error) {
        console.error('Installation failed:', error);
        throw error;
    }
});
exports.installModpack = installModpack;
