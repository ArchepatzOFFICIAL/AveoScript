const dialogueBox = document.getElementById("dialogueBox");
const dialogueText = document.getElementById("dialogueText");

let typingInterval = null;

function typeDialogue(text) {
  clearInterval(typingInterval);
  dialogueText.textContent = "";
  let charIndex = 0;

  typingInterval = setInterval(() => {
    dialogueText.textContent += text.charAt(charIndex);
    charIndex++;
    if (charIndex >= text.length) {
      clearInterval(typingInterval);
    }
  }, 40); // speed of typing
}

// Get all map regions
const regions = document.querySelectorAll(".map-region");

regions.forEach(region => {
  region.addEventListener("mouseenter", () => {
    const text = region.dataset.dialogue || "";
    dialogueBox.style.display = "block";
    typeDialogue(text);
  });

  region.addEventListener("mouseleave", () => {
    clearInterval(typingInterval);
    dialogueBox.style.display = "none";
    dialogueText.textContent = "";
  });
});
