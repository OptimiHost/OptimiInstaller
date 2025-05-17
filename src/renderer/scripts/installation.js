function startInstallation() {
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');

    if (!progressBar || !statusText) {
        console.error('Required DOM elements not found.');
        return;
    }

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + '%';
            statusText.innerText = `Installing... ${progress}%`;
        } else {
            clearInterval(interval);
            statusText.innerText = 'Installation Complete!';
            setTimeout(() => {
                window.location.href = 'done.html';
            }, 2000);
        }
    }, 500);
}

window.onload = startInstallation;