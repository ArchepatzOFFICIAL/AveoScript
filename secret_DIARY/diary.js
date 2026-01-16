const topImages = [
  "../resources/diary_currentproject/1showcase.png",
   "../resources/diary_currentproject/2showcase.png",
    "../resources/diary_currentproject/3showcase.png",
     "../resources/diary_currentproject/4showcase.png",
];

const bottomImages = [
  "../resources/diary_currentproject/noproject/shimmer1.png",
  "../resources/diary_currentproject/noproject/shimmer2.png",
    "../resources/diary_currentproject/noproject/shimmer3.png",
      "../resources/diary_currentproject/noproject/shimmer4.png",
        "../resources/diary_currentproject/noproject/shimmer5.png",
          "../resources/diary_currentproject/noproject/shimmer6.png",
            "../resources/diary_currentproject/noproject/shimmer7.png",
];

const topBoxImg = document.querySelector(".top-box img");
const bottomBoxImg = document.querySelector(".bottom-box img");

let topIndex = 0;
let bottomIndex = 0;

topBoxImg.src = topImages[topIndex];
bottomBoxImg.src = bottomImages[bottomIndex];

function cycleTopImage() {
  topIndex = (topIndex + 1) % topImages.length;
  fadeImage(topBoxImg, topImages[topIndex]);
}

function cycleBottomImage() {
  bottomIndex = (bottomIndex + 1) % bottomImages.length;
  fadeImage(bottomBoxImg, bottomImages[bottomIndex]);
}

setInterval(cycleTopImage, 1000);
setInterval(cycleBottomImage, 1000);

function fadeImage(imgElement, src) {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = src;
    imgElement.style.opacity = 1;
  }, 300);
}

