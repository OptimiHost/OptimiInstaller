"use strict";
// src/renderer/scripts/modpack-selection.ts
document.addEventListener('DOMContentLoaded', () => {
    const optimiButton = document.getElementById('optimi');
    const optimiLightButton = document.getElementById('optimi-light');
    optimiButton.addEventListener('click', () => {
        selectModpack('Optimi');
    });
    optimiLightButton.addEventListener('click', () => {
        selectModpack('Optimi Light');
    });
    function selectModpack(modpack) {
        // Logic to handle modpack selection
        console.log(`Selected modpack: ${modpack}`);
        // Navigate to the version selection page
        window.location.href = 'version-selection.html';
    }
});
