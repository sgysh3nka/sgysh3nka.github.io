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
    'https://facebook.com',
    'https://yahoo.com',
    'https://live.com',
    'https://wikipedia.org',
    'https://msn.com',
    'https://microsoft.com',
    'https://blogspot.com',
    'https://baidu.com',
    'https://qq.com',
    'https://mozilla.com',
    'https://telegram.org',
    'https://t.me/hamster_kombat_bot',
    'https://tiktok.com',
    'https://likee.video',
    'https://pornhub.com',
    'https://mcpehub.org/mods/',
    'https://youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUM0KDQuNC60YDQvtC7',
    'https://only-fans.uk/randomiser',
    'https://sgysh3nka.github.io/joke/lv_0_20240919090015.mp4',
];

randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sites.length);
    const randomSite = sites[randomIndex];
    window.open(randomSite, '_blank');
});
