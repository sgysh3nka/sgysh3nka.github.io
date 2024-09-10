const randomButton = document.getElementById('random-button');
const sites = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.vk.com',
    'https://www.instagram.com',
    'https://www.github.com',
    'https://nigga.gg',
    'https://yandex.ru',
    'https://ok.ru',
    'https://discord.com',
    'https://notexttospeech.com',
];

randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    const randomSite = sites[randomIndex];
    window.open(randomSite, '_blank');
});
