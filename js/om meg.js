const video = document.getElementById('minVideo');
const spillAv = document.getElementById('spillAv');
const pause = document.getElementById('pause');
const lyd = document.getElementById('lyd');
const volum = document.getElementById('volum');
const fullskjerm = document.getElementById('fullskjerm');

spillAv.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());

lyd.addEventListener('click', () => {
    video.muted = !video.muted;
    lyd.textContent = video.muted ? ' Lyd på' : ' Lyd av';
});

volum.addEventListener('input', () => {
    video.volume = volum.value;
});

fullskjerm.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen();
});