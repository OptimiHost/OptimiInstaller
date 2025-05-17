const { app } = require('electron');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { extract } = require('tar');
const { createWriteStream } = require('fs');

const downloadFile = async (url, outputPath) => {
    const writer = createWriteStream(outputPath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

const installModpack = async (modpackUrl, installDir) => {
    const modpackName = path.basename(modpackUrl);
    const outputPath = path.join(app.getPath('temp'), modpackName);

    try {
        await downloadFile(modpackUrl, outputPath);
        await extract({
            file: outputPath,
            cwd: installDir,
        });
        fs.unlinkSync(outputPath);
    } catch (error) {
        console.error('Installation failed:', error);
        throw error;
    }
};

module.exports = { installModpack };