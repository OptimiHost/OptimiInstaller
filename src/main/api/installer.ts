// This file contains functions to handle the installation process of the selected modpack, including downloading and extracting files.

import { app } from 'electron';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { extract } from 'tar';
import { createWriteStream } from 'fs';

const downloadFile = async (url: string, outputPath: string) => {
    const writer = createWriteStream(outputPath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise<void>((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

const installModpack = async (modpackUrl: string, installDir: string) => {
    const modpackName = path.basename(modpackUrl);
    const outputPath = path.join(app.getPath('temp'), modpackName);

    try {
        await downloadFile(modpackUrl, outputPath);
        await extract({
            file: outputPath,
            cwd: installDir,
        });
        fs.unlinkSync(outputPath); // Clean up the downloaded file
    } catch (error) {
        console.error('Installation failed:', error);
        throw error;
    }
};

export { installModpack };