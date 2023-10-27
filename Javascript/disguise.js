// This is the content of "disguise.js"
const button = document.getElementById('changeFaviconTitle');
const pageTitle = document.getElementById('pageTitle');
const favicon = document.getElementById('favicon');

button.addEventListener('click', () => {
    // Change the title
    pageTitle.textContent = 'Canvas';

    // Change the favicon
    favicon.href = 'Images/canvas.ico';
});
