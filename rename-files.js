"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Hardcoded date in YYYY-MM-DD format
const dateString = '2024-08-11';
// Folder path containing the photos
const folderPath = './photos'; // Change this to your folder path
// Desired base name for the photos
const baseName = 'Royal Ontario Museum';
// Function to rename photos
function renameFiles() {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        let photoIndex = 1;
        files.forEach((file) => {
            const ext = path.extname(file);
            const newName = `${dateString} ${baseName} ${String(photoIndex).padStart(2, '0')}${ext}`;
            const oldPath = path.join(folderPath, file);
            const newPath = path.join(folderPath, newName);
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Error renaming file ${file} to ${newName}:`, err);
                }
                else {
                    console.log(`Renamed ${file} to ${newName}`);
                }
            });
            photoIndex++;
        });
    });
}
// Run the rename function
renameFiles();
