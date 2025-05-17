import { dialog } from 'electron';
import { promises as fs } from 'fs';

export async function selectDirectory(): Promise<string | undefined> {
    const result = await dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if (result.canceled) {
        return undefined;
    } else {
        const selectedPath = result.filePaths[0];
        // Optionally, you can check if the directory is writable
        try {
            await fs.access(selectedPath, fs.constants.W_OK);
            return selectedPath;
        } catch (error) {
            console.error('Selected directory is not writable:', error);
            return undefined;
        }
    }
}