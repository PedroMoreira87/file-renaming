import * as fs from 'fs';
import * as path from 'path';

// Hardcoded date in YYYY-MM-DD format
const dateString = '2024-04-13';

// Folder path containing the files
const folderPath = './files'; // Change this to your folder path

// Desired base name for the files
const baseName = 'CN Tower';

// Function to rename files
function renameFiles(): void {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    let fileIndex = 1;
    files.forEach((file) => {
      const ext = path.extname(file);
      const newName = `${dateString} ${baseName} ${String(fileIndex).padStart(2, '0')}${ext}`;
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(folderPath, newName);
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming file ${file} to ${newName}:`, err);
        } else {
          console.log(`Renamed ${file} to ${newName}`);
        }
      });
      fileIndex++;
    });
  });
}

// Run the rename function
renameFiles();
