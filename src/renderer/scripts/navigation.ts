// This file handles the navigation between different pages in the installer.

const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            const targetPage = target.getAttribute('data-target');
            if (targetPage) {
                navigateTo(targetPage);
            }
        });
    });
});

function navigateTo(page: string) {
    ipcRenderer.send('navigate', page);
}