const fetch = require('node-fetch');

async function fetchModpackInfo(modpackId) {
    const response = await fetch(`https://api.modrinth.com/v2/project/${modpackId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch modpack information');
    }
    return await response.json();
}

async function fetchModpackVersions(modpackId) {
    const response = await fetch(`https://api.modrinth.com/v2/project/${modpackId}/version`);
    if (!response.ok) {
        throw new Error('Failed to fetch modpack versions');
    }
    return await response.json();
}

module.exports = { fetchModpackInfo, fetchModpackVersions };