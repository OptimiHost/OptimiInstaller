"use strict";
// This file handles the navigation between different pages in the installer.
const { ipcRenderer } = require('electron');
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.currentTarget;
            const targetPage = target.getAttribute('data-target');
            if (targetPage) {
                navigateTo(targetPage);
            }
        });
    });
});
function navigateTo(page) {
    ipcRenderer.send('navigate', page);
}
