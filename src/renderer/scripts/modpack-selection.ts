// src/renderer/scripts/modpack-selection.ts

document.addEventListener('DOMContentLoaded', () => {
    const optimiButton = document.getElementById('optimi') as HTMLButtonElement;
    const optimiLightButton = document.getElementById('optimi-light') as HTMLButtonElement;

    optimiButton.addEventListener('click', () => {
        selectModpack('Optimi');
    });

    optimiLightButton.addEventListener('click', () => {
        selectModpack('Optimi Light');
    });

    function selectModpack(modpack: string) {
        // Logic to handle modpack selection
        console.log(`Selected modpack: ${modpack}`);
        // Navigate to the version selection page
        window.location.href = 'version-selection.html';
    }
});