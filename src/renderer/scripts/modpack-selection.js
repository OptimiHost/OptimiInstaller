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
        console.log(`Selected modpack: ${modpack}`);
        window.location.href = 'version-selection.html';
    }
});