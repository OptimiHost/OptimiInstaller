import fetch from 'node-fetch';

async function fetchModpackInfo(modpackId: string) {
    const response = await fetch(`https://api.modrinth.com/v2/project/${modpackId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch modpack information');
    }
    return await response.json();
}

async function fetchModpackVersions(modpackId: string) {
    const response = await fetch(`https://api.modrinth.com/v2/project/${modpackId}/version`);
    if (!response.ok) {
        throw new Error('Failed to fetch modpack versions');
    }
    return await response.json();
}

export { fetchModpackInfo, fetchModpackVersions };