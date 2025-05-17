// This script populates the version list for the selected modpack on the version-selection page.

import { fetchModpackVersions } from '../../main/api/modrinth';

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', async () => {
    const versionList = document.getElementById('version-list');
    const nextButton = document.getElementById('next-button') as HTMLButtonElement;

    if (!versionList || !nextButton) {
        console.error('Required DOM elements not found.');
        return;
    }

    // Retrieve selected modpack from localStorage
    const selectedModpackId = localStorage.getItem('selectedModpackId');
    if (!selectedModpackId) {
        versionList.textContent = 'No modpack selected.';
        nextButton.disabled = true;
        return;
    }

    try {
        // Fetch versions from Modrinth API
        const versions = await fetchModpackVersions(selectedModpackId);
        if (!Array.isArray(versions) || versions.length === 0) {
            versionList.textContent = 'No versions found for this modpack.';
            nextButton.disabled = true;
            return;
        }

        // Populate version list as radio buttons
        versionList.innerHTML = '';
        versions.forEach((version: any, idx: number) => {
            const label = document.createElement('label');
            label.style.display = 'block';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'modpack-version';
            radio.value = version.version_number || version.name || `Version ${idx + 1}`;
            if (idx === 0) radio.checked = true;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(` ${version.version_number || version.name || `Version ${idx + 1}`}`));
            versionList.appendChild(label);
        });

        nextButton.disabled = false;
    } catch (error) {
        versionList.textContent = 'Failed to load versions.';
        nextButton.disabled = true;
        console.error('Error fetching versions:', error);
    }

    // Handle Next button click
    nextButton.addEventListener('click', () => {
        const selectedRadio = document.querySelector<HTMLInputElement>('input[name="modpack-version"]:checked');
        if (selectedRadio) {
            localStorage.setItem('selectedModpackVersion', selectedRadio.value);
            window.location.href = 'directory-selection.html';
        }
    });
});