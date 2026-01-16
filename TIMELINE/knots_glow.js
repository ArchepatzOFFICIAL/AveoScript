document.addEventListener("DOMContentLoaded", () => {
    const knots = Array.from(document.querySelectorAll(".knot"));

    let currentIndex = 0;
    const pulseDuration = 200; // glow time
    const pulseGap = 300;      // delay before next knot

    function pulseNextKnot() {
        const knot = knots[currentIndex];

        knot.classList.add("pulse");

        setTimeout(() => {
            knot.classList.remove("pulse");
        }, pulseDuration);

        currentIndex = (currentIndex + 1) % knots.length;
    }

    setInterval(pulseNextKnot, pulseGap);
});
