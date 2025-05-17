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
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectDirectory = selectDirectory;
const electron_1 = require("electron");
const fs_1 = require("fs");
function selectDirectory() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield electron_1.dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        if (result.canceled) {
            return undefined;
        }
        else {
            const selectedPath = result.filePaths[0];
            // Optionally, you can check if the directory is writable
            try {
                yield fs_1.promises.access(selectedPath, fs_1.promises.constants.W_OK);
                return selectedPath;
            }
            catch (error) {
                console.error('Selected directory is not writable:', error);
                return undefined;
            }
        }
    });
}
