const elevator_images = [
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant1.png",
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant2.png",
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant3.png",
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant4.png",
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant5.png",
    "../resources/archive_backgrounds/archive_backgrounds_animated/elevator_footageWEBSITEvariant7.png",
];

// Preload images
const preloadedImages = [];
elevator_images.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});

const backgroundanimatedDiv = document.getElementById("animated-background");

// Preload all backgrounds including the secret one
const secretImage = new Image();
secretImage.src = "../resources/archive_backgrounds/elevator_footageWEBSITEvariant6.png";

let backgroundInterval = setInterval(animatedBackground, 80);

function setBackground(url) {
    // Pause the random background interval
    clearInterval(backgroundInterval);
    backgroundanimatedDiv.style.backgroundImage = `url('${url}')`;
}

// Resume random animation
function resumeBackground() {
    backgroundInterval = setInterval(animatedBackground, 80);
}

// Keep the original random background function
function animatedBackground() {
    const randomIndex = Math.floor(Math.random() * elevator_images.length);
    backgroundanimatedDiv.style.backgroundImage = `url('${elevator_images[randomIndex]}')`;
}

// Expose functions globally so dialogue_box.js can call them
window.setBackground = setBackground;
window.resumeBackground = resumeBackground;
window.secretImage = secretImage.src;



