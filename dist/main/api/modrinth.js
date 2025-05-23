"use strict";
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
exports.fetchModpackInfo = fetchModpackInfo;
exports.fetchModpackVersions = fetchModpackVersions;
const node_fetch_1 = __importDefault(require("node-fetch"));
function fetchModpackInfo(modpackId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(`https://api.modrinth.com/v2/project/${modpackId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch modpack information');
        }
        return yield response.json();
    });
}
function fetchModpackVersions(modpackId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(`https://api.modrinth.com/v2/project/${modpackId}/version`);
        if (!response.ok) {
            throw new Error('Failed to fetch modpack versions');
        }
        return yield response.json();
    });
}
