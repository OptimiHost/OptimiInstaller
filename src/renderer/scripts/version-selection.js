const { fetchModpackVersions } = require('../../main/api/modrinth');

document.addEventListener('DOMContentLoaded', async () => {
    const versionList = document.getElementById('version-list');
    const nextButton = document.getElementById('next-button');

    if (!versionList || !nextButton) {
        console.error('Required DOM elements not found.');
        return;
    }

    const selectedModpackId = localStorage.getItem('selectedModpackId');
    if (!selectedModpackId) {
        versionList.textContent = 'No modpack selected.';
        nextButton.disabled = true;
        return;
    }

    try {
        const versions = await fetchModpackVersions(selectedModpackId);
        if (!Array.isArray(versions) || versions.length === 0) {
            versionList.textContent = 'No versions found for this modpack.';
            nextButton.disabled = true;
            return;
        }

        versionList.innerHTML = '';
        versions.forEach((version, idx) => {
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

    nextButton.addEventListener('click', () => {
        const selectedRadio = document.querySelector('input[name="modpack-version"]:checked');
        if (selectedRadio) {
            localStorage.setItem('selectedModpackVersion', selectedRadio.value);
            window.location.href = 'directory-selection.html';
        }
    });
});