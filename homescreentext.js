
const hometext = document.getElementById("hometext");
const darknessText = document.querySelector(".dark-aura-fortext");

const backgrounds =[
    "resources/homescreen_alternatives/MENUoptionpoduszka.png"
]

const poduszkastext = [
    {text: "You’re g'rat’eful.", weight: 60},
    {text: "You want ’ze plush’e, hehe.", weight: 20},
    {text: "The're’z no ho'rizon, hehe.", weight: 10},
    {text: "Ze’ way i’s to pe’rfection…", weight: 7},
    {text: "S’weet's. Can be bitte'r if you'r life ha’z lo’st on glitte'r!", weight: 1},
    {text: "Nothin’ la’st’z fo'reve'r.", weight: 1},
    {text: "Happines’z… I's when I’m with you. You'r move!", weight: 0.9999993},
    {text: "S'ometime’z I wonde’r. About you I ponde’r. Wo'rld goes to 'rumble, mask hide'z love that i'z unde'r!", weight: 0.0000007},
]


function takeOneMessage(){
    const totalWeight = poduszkastext.reduce((sum, m) => sum + m.weight, 0);
    let random = Math.random() * totalWeight;



for (const message of poduszkastext){
    if (random < message.weight) return message.text;

    random -= message.weight;
}
}




function typeText(text, speed = 80) {
  let index = 0;
  hometext.textContent = "";
  hometext.dataset.text = "";

  const typingInterval = setInterval(() => {
    hometext.textContent += text[index];
    hometext.dataset.text = hometext.textContent;
    index++;

    if (index >= text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}


function heavyGlitch() {
  const bgDiv = document.querySelector(".BackgroundImage");
  const originalBg = "resources/MENUoption1.png"; // default
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  bgDiv.style.backgroundImage = `url("${randomBg}")`;

  document.body.classList.add("heavy-glitch-active");
  darknessText.style.opacity = "1";

  setTimeout(() => {
    document.body.classList.remove("heavy-glitch-active");
    darknessText.style.opacity = "0";
    bgDiv.style.backgroundImage = `url("${originalBg}")`; // revert
  }, 90);
}

setInterval(() => {
  if (Math.random() < 0.18) { 
    heavyGlitch();
  }
}, 400);


const chosenText = takeOneMessage();
typeText(chosenText);



function randomlyDisappearingText() {
  if (Math.random() < 0.2) {
    hometext.classList.add("signal-lost");

    setTimeout(() => {
      hometext.classList.remove("signal-lost");
    }, 17);
  }
}


setInterval(randomlyDisappearingText, 777);