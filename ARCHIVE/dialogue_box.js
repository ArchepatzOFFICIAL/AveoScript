const textElement = document.querySelector(".dialogue-text");
const dialogueBox = document.querySelector(".dialogue-box");
const dialogueButton = document.querySelector(".dialogue-button");

const dialogues = [
  "To 'ze A'rchive's you t'raveled, heh?",
  "No'rmally... Nobody ca'res fo'r collectible's... But you do, hehe.",
  "Ye, fo'r some it'z... Sa'rca'ztical love. Fo'r z'entiment.",
  "Ahh, nobody want'z z'entiment anymo're.",
  "Mo're fo'r u's!",
  "Whe're to go' fir'zt?"
];

const secretWords = {
  comics: "archive_rooms/comics.html",
  fullarts: "archive_rooms/fullarts.html",
  minicomics: "archive_rooms/minicomics.html",
  sketches: "archive_rooms/sketches.html",
  music: "archive_rooms/music.html",
  games: "archive_rooms/games.html",

  birdcage: "archive_rooms/birdcage.html",
};

let dialogueIndex = 0;
let charIndex = 0;
let isTyping = false;
let secretEnabled = false;
let typedWord = "";

function typeText(text) {
  isTyping = true;
  textElement.textContent = "";
  charIndex = 0;

  const interval = setInterval(() => {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex >= text.length) {
      clearInterval(interval);
      isTyping = false;
    }
  }, 45);
}

//START OF FIRST DIALOGUE!!
typeText(dialogues[dialogueIndex]);

dialogueButton.addEventListener("click", () => {
  if (isTyping) return;

  dialogueIndex++;

  if (dialogueIndex < dialogues.length) {
    typeText(dialogues[dialogueIndex]);
  } else {
    closeDialogue();
  }
});

function closeDialogue() {
  dialogueBox.style.display = "none";
  secretEnabled = true;
  typedWord = "";
  dialogueButton.blur();
}

//SECRET WORD DETECTION!!
document.addEventListener("keydown", (event) => {
  if (!secretEnabled) return;

  // Show the secret image whenever ANY key is pressed
  window.setBackground(window.secretImage);

  setTimeout(() => {
    window.resumeBackground();
  }, 100); // <-- 100ms = 0.1s flash

  // Track typed characters for secret words
  if (event.key.length === 1) {
    typedWord += event.key.toLowerCase();
  }

  for (const word in secretWords) {
    if (typedWord.includes(word)) {
      transitionToPage(secretWords[word]);
      return;
    }
  }

  if (typedWord.length > 50) {
    typedWord = typedWord.slice(-50);
  }
});


//TO-WHITE TRANSITION EFFECT!!
const fadeOverlay = document.getElementById("fade_overlay");

function transitionToPage(url) {
  fadeOverlay.classList.add("active");

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}