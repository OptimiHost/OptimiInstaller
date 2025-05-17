const { dialog } = require('electron');
const { promises: fs } = require('fs');

async function selectDirectory() {
    const result = await dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if (result.canceled) {
        return undefined;
    } else {
        const selectedPath = result.filePaths[0];
        try {
            await fs.access(selectedPath, fs.constants.W_OK);
            return selectedPath;
        } catch (error) {
            console.error('Selected directory is not writable:', error);
            return undefined;
        }
    }
}

module.exports = { selectDirectory };