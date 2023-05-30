const close = document.querySelector('.trailer__icon')
const play = document.querySelector('.play');
const trailer = document.querySelector('.trailer');
const video = document.querySelector('.trailer__video')

const playVideo = () => {
    console.log('hola');
    trailer.classList.toggle('active');
    video.currentTime = 0;
}

play.addEventListener('click', playVideo);

close.addEventListener('click', () => {
    trailer.classList.toggle('active');
})