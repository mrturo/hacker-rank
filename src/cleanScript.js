const fs = require('fs');
const path = require('path');
// Function to attempt deleting a file with multiple retries
function forceDeleteFile (filePath, retries = 5) {
  while (retries > 0) {
    try {
      fs.rmSync(filePath, { force: true });
      return;
    } catch (err) {
      if (err.code !== 'EBUSY') {
        console.error(`Error deleting file ${filePath}: ${err.message}`);
        return;
      }
      retries--;
      if (retries > 0) {
        console.log(`Retrying to delete file ${filePath}...`);
        // Wait for a brief period before retrying
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        delay(100);
      }
    }
  }
  console.error(`Failed to delete file ${filePath} after multiple attempts.`);
}
// Function to recursively delete directories
function deleteDirectory (directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subdirectories
        deleteDirectory(curPath);
      } else {
        forceDeleteFile(curPath);
      }
    });
    try {
      fs.rmdirSync(directoryPath);
    } catch (err) {
      console.error(
        `Error deleting directory ${directoryPath}: ${err.message}`
      );
    }
  }
}
// Function to delete files matching a pattern
function deleteFiles (filesPattern) {
  const directory = path.dirname(filesPattern);
  const baseNamePattern = path.basename(filesPattern);
  const regexPattern = new RegExp(
    '^' + baseNamePattern.replace(/\*/g, '.*') + '$'
  );
  if (fs.existsSync(directory)) {
    fs.readdirSync(directory).forEach((file) => {
      if (regexPattern.test(file)) {
        const curPath = path.join(directory, file);
        if (fs.lstatSync(curPath).isFile()) {
          forceDeleteFile(curPath);
        }
      }
    });
  }
}
['./package-lock.json', './*.txt', './sonar-project.properties'].forEach(
  deleteFiles
);
['./node_modules', './coverage', './dist', './logs', './.scannerwork'].forEach(
  deleteDirectory
);
console.log('Clean script executed successfully.');
