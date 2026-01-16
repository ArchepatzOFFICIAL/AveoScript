
const hoverBg = document.querySelector(".bg-hover");

document.querySelectorAll("svg path[data-bg]").forEach(path => {

    path.addEventListener("mouseenter", () => {

        hoverBg.style.backgroundImage = `url("${path.dataset.bg}")`;

        hoverBg.style.opacity = "1";
    });

    

    path.addEventListener("mouseleave", () => {
        hoverBg.style.opacity = "0";
    }
);

}
);