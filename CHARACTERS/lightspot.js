
const spotlight = document.querySelector('.moving-spotlight');

function moveSpotlight() {
   const imgWidth = Math.min(spotlight.offsetWidth, window.innerWidth);
const imgHeight = Math.min(spotlight.offsetHeight, window.innerHeight);

const maxX = window.innerWidth - imgWidth;
const maxY = window.innerHeight - imgHeight;

    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    spotlight.style.left = randomX + 'px';
    spotlight.style.top = randomY + 'px';

    setTimeout(moveSpotlight, 3000); 
}


moveSpotlight();

