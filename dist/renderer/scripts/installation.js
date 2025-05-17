"use strict";
function startInstallation() {
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');
    if (!progressBar || !statusText) {
        console.error('Required DOM elements not found.');
        return;
    }
    // Simulate installation process
    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10; // Increment progress
            progressBar.style.width = progress + '%';
            statusText.innerText = `Installing... ${progress}%`;
        }
        else {
            clearInterval(interval);
            statusText.innerText = 'Installation Complete!';
            // Optionally navigate to the done page after a delay
            setTimeout(() => {
                window.location.href = 'done.html';
            }, 2000);
        }
    }, 500); // Simulate time taken for each increment
}
// Call the function to start installation when the page loads
window.onload = startInstallation;
