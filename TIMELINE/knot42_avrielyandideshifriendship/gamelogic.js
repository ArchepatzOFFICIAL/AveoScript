const dialogueSFX = new Audio("./../resources/timeline_contents/knot42/poduszkas_dialoguetalkingsound.mp3");
dialogueSFX.volume = 0.9;
dialogueSFX.load();

const dialogueBox = document.getElementById("dialogueBox");
const dialogueText = document.getElementById("dialogueText");

const proxitiniHitbox = document.querySelector(".proxitini-hitbox");


const BedMainFramehitbox = [
  {text: "There’z pink, white, hid’den blue… Ha, small bi'rd’z bed!", weight: 70 },
  {text: "I should’a too have a z’pot to s’leep. Gott’a think on it!", weight: 20 },
  {text: "Bigge’zt bed fo'r smalle’zt of bi'rd's, hehe.", weight: 7},
  {text: "My little z’weet birde’s need a nes’t too… So they s’leep, z'oundly s’leep…", weight: 2},
  {text: "Oh! Imagine a big comfy ne’st like thi’z! And when EMPTY the ho'rrible feeling that hit’z!", weight: 0.993 },
  {text: "Doe’s Bazeli kid sleep he're too? For them’ even a box will’ do!", weight: 0.007},
]



const BedPillowshitbox = [
  {text: "Stack of pillow’z…", weight:70},
  {text: "Stack of pillow’z… Big and flu’ffy pillow’z. S'mall bi'rd ha’s a fea'r they will not tell, hehe.", weight:20},
  {text: "'Small bi'rd’z! But me, ’a big bird need’s one too… ", weight:7},
  {text: "Take one? Maybe one?", weight:3},
]



const BedClosethitbox = [
  {text: "What’z the pape'r unde'r blanket?", weight:70},
  {text: "What’z the pape'r unde'r blanket? Oh, that’z the plan’s, that’z the bluep'rints! A 'roller-coa'ste’r shall it be!", weight:20},
  {text: "Ah, child of menace. But a con’st'ructo'r of fun it i’z!", weight:10},
]


const Doorhitbox = [
  {text: "It’s ‘ze small bird… OR ‘ze menace kid playing s’omewhere.", weight:70},
  {text: "…We are having fun!… Ah, I could never’ z’peak that language-", weight:20},
  {text: "I’m hoping nobody will p’op up, hehe. Back to window I should’a go.", weight:7},
  {text: "Hey comrade'z…", weight:2},
  {text: "Jou'rney every’one!…", weight:0.993},
  {text: "We got too deep to e’zcape now…", weight:0.007},
]


const DeskBigOpenbookhitbox = [
  {text: "Of liberty and ‘ze law‘z… ‘Ze law‘z of freedom.", weight:70},
  {text: "Of liberty and ‘ze law‘z… ‘Ze law‘z of freedom. You will do it, s’mall bird, you will do it.", weight:20},
  {text: "Oho… Cannot read’ it ea’zily. Text is dry, text is wi’se. In right hand’z law’s on our s’ide!", weight:7},
  {text: "n moment’z like this… Ah, nevermind-", weight:3},
]


const DeskSmallOpenBookhitbox = [
  {text: "OHO, it’z NOT s’cience!", weight:70},
  {text: "OHO, it’z not s’cience! It’z sweet sweet book.", weight:20},
  {text: "First z’troke, then cares’z, then wait for it to meow! Good memorie’z.", weight:7},
  {text: "They cannot be- No- They give ’em snack’z for cat’z?!", weight:2},
  {text: "Oh, ju’zt you wait! Ju’zt you wait for ’ze sibling menace! But shhh…", weight:1},
]


const DeskShelveshitbox = [
  {text: "Ca'ramel’z, dozen’z of ca'ramel’z- In p'retty, p'retty blue w'rap’per’z, hehe.", weight:70},
  {text: "Ca'ramel’z, dozen’z of ca'ramel’z-  But’ta why ’zo many-?", weight:20},
  {text: "I feel like that shelf hold'z s'ec'ret'z... Not yet 'reveale'd!", weight:7},
  {text: "Lookin’ deepe'r… More candy! Good candy!", weight:2},
  {text: "My s’mall bi'rd’z would’a go insane! Oho, hehe, me too, me too.", weight:0.5},
  {text: "S’weets. Can be bitte'r if you'r lif’e ha’z lo’st on glitte'r!", weight:0.5},
  
]


const BookshelvesNextToComicShelveshitbox = [
  {text: "Ah! ’Ze s’mall gift of paper!", weight:70},
  {text: "Ah! ’Ze s’mall gift of paper! Lil’ bird s’at on a z’craper!", weight:20},
  {text: "t feel’z like a duty… To teach’ my bird’z the art of o'rigami. For z’entiment, for memory.", weight:7},
  {text: "Where’z their pet tho, where’z the pet?", weight:3},
]


const BookshelvesOpenBookhitbox = [
  {text: "Ohh, z’omething, z’omething, con’stitution…", weight:70},
  {text: "Ahh, z’omething, z’omething, con’stitution… Not my circu’z, not my monkey’z!", weight:20},
  {text: "Would’a not read it as hobby… Z’orry, f'riend-", weight:10},
]


const BookshelvesRighthitbox = [
  {text: "There’z eve'rything a youn’g good geniu’z could need…", weight:70},
  {text: "There’z eve'rything a youn’g good geniu’z could need… But where’z the game’z f'riend, where’z the fun?", weight:20},
  {text: "A book on s’tory of my kind?? ‘Ze Machochi would’a drop-“", weight:7},
  {text: "Nono… Who let’ ‘ze CHILD acces’z thi’z?! ‘Chaos Trial’ i’z not’ta lecture for kid’z- For adult’z neither, brr.", weight:2},
  {text: "It’z the… Oh! The journal of ‘ze warm nice pla’ze! The old map i’z there!", weight:0.993},
  {text: "Did my f'riend know what book’z are here? Not impos’zible.“", weight:0.007},
]

const BookshelvesLefthitbox = [
  {text: "Even mo're law, mo're intelligent pa'radi’ze!", weight:70},
  {text: "Even mor’e law, mor’e intelligent paradi’ze! Life gave them lemon’z, they made it z’weet!", weight:20},
  {text: "’Zo many good title’s. Be’st one’z!", weight:7},
  {text: "S’mall bird al’so like’z p’zychology… Big bird’z would be p’roud!", weight:2},
  {text: "Haha! Would’a love to see the library again! ‘Ze in the west fore’zt. With ‘ze tea and week’z of time.", weight:0.993},
  {text: "My little birdie’z should’a read more!“", weight:0.007},
]

const Boxhitbox = [
  {text: "It’z ‘ ze’containe'r… Of Bazeli cat’s!", weight:70},
  {text: "It’z ‘ ze’container of Bazeli cat’s! So s’mall’, even for the reckles'z child-", weight:20},
  {text: "Nono, not my favorite pla’ce for sleep’ez.", weight:7},
  {text: "Imagin’ nappin’g in a s’quare!", weight:2},
  {text: "…Oh, friend… All of them’ so z’mall…", weight:1},
]

const Chessboardhitbox = [
{text: "All tho'ze little figu're'z!", weight: 70},
{text: "All tho'ze little figu're'z... I will'not c'ry, it'z all al'right!", weight:20},
{text: "AH, NONO- The child of menace- It 'replaced rookies... WITH 'ZE CAT PEBBLES, HAHA-", weight:7},
{text: "White again'zt blue, hehe. Both 'zo hone'st and 'zo t'rue.", weight:1},
{text: "Ho'p on 'ze pony... And get 'ze glo'ry!", weight:1},
{text: "Stuck 'ze fatty Queen in 'ze washin' machin'. Thi'z i's 'ze way!", weight:0.993},
{text: "'Ze king i'z missing... I'm awa're.", weight:0.007},
]

const Toolshitbox = [
  {text: "It's 'ze s'crewd'rivers... It's 'ze w'renche'z...", weight: 70},
   {text: "'Ze 'small bi'rd doe'sn't complain about di'rty tool'z?", weight: 20},
    {text: "Wait... 'Sy'ringe'z?? Oh, ye'z... They s'till mu'zt have occa'sional pain'z.", weight: 10},
]

const OilSpothitbox = [
  {text: "Uhh, 'ze spot of di'rty oil.", weight: 70 },
  {text: "Uhh, 'ze spot of di'rty oil. I bet it cau'sed a'rgument!", weight:20 },
  {text: "Di'rty s'pot on shiny floo'r... Feel'z illegal in thi'z hou'se- ", weight:7 },
  {text: "The menace child make'z mes's again?!", weight: 2},
  {text: "On'ze I 'sliped on such 'slippe'ry 'spot- My beak hu'rt for qua'rte'r of month...", weight: 0.993},
  {text: "But what... Do they buil'd 'ze machine'z here? Need to 'sneak in on'ce they 'sleep!", weight: 0.007},
]


//✨🎨 Interactible AREAS 🎨✨
const Sketchhitbox = [
{text: "Oh! 'Ze s'mall bi'rd like'z to d'raw? How did THAT outgo' me...?", weight:  70},
{text: "So many nice d'rawn line'z. S'mall bi'rd i's a beginne'r. But s'mall bi'rd i'z al'so a winne'r, hehe!", weight:  20},
{text: "Oho? Why a're alway'z such lovely pape'r t'rea'sure's hidden in da'rk place's? They should be s'een and shown!", weight:  7},
{text: "Hehe, s'mall bi'rd u'se'z hand's fo'r the 'right thing'z! W'riting, d'rawing, showing affection... All in tho'ze little pictu're'z! I'm feeling deeply p'roud of the s'mall bi'rd...", weight:  3},
]

const Comicshitbox = [
{text: "'Ze colo'rful pape'r's!", weight:  70},
{text: "'Ze colo'rful pape'r's! S'mall bi'rd 'really want'z to keep tho'se memorie's-", weight:  20},
{text: "Aha, 'ze paper's colorful! I feel like the're will be mo're!", weight:  7},
{text: "It 'really look's like a s'to'ry, hehe! And I know all s'poiler'z, hehe!", weight:  3},
]

const FullArtshitbox = [
{text: "Oh! 'Ze pictu're'z of them togethe'r! I almo'st want to take one fo'r my'self, hehe.", weight: 70 },
{text: "Hehe, I don't have habit of taking photo'z my'self.", weight:  20},
{text: "Hehe, I 'remembe'r all tho'ze moment's my'self, he!", weight:  7},
{text: "Oh! 'Ze pictu're'z of them togethe'r! Take one befo're it'z ove'r?", weight:  3},
]




//for now hidden hitboxes
const Proxitini = [
  {text: "F'riend! They 'rea'lly left you? … But what if I… I take you?", weight:70},
  {text: "Nonono, we ag'reed, we s’poke of it! No taking, ju’st watching! Even a quick walk a'round a 'room is ha'rm?", weight:20},
  {text: "...I'm so p'roud of them. Even the menace child, haha! Let me show you a'round, have a bette'r look!", weight:7},
  {text: "Would the're ’really be ha’rm…? If I… I could ju’st take the chanc’e and e’zcape-?", weight:1},
]





//HITBOX REGISTRY - Keeps my dialogues alltogether!
const HITBOX_DIALOGUES = {
  "Bed-MainFrame": BedMainFramehitbox,
  "Bed-Pillows": BedPillowshitbox,
  "Bed-Closet": BedClosethitbox,
  "Door": Doorhitbox,
  "Desk-Shelves": DeskShelveshitbox,
  "Desk-BigOpenBook": DeskBigOpenbookhitbox,
  "Desk-SmallOpenBook": DeskSmallOpenBookhitbox,
  "Bookshelves-NextToComicHitbox": BookshelvesNextToComicShelveshitbox,
  "Bookshelves-OpenBook": BookshelvesOpenBookhitbox,
  "Bookshelves-Right": BookshelvesRighthitbox,
  "Bookshelves-Left": BookshelvesLefthitbox,
  "Box": Boxhitbox,
  "Chessboard": Chessboardhitbox,
  "Tools": Toolshitbox,
  "OilSpot": OilSpothitbox,

    "ComicAREA": Comicshitbox,
  "SketchAREA": Sketchhitbox,
  "FullArtsAREA": FullArtshitbox
};
const HITBOX_ACTIONS = {
  ComicAREA: () => openImageViewer(comicImages),
  SketchAREA: () => openImageViewer(sketchImages),
  FullArtsAREA: () => openImageViewer(fullArtsImages)
};








const room_container = document.querySelector(".room_container");
const poduszka = document.querySelector(".poduszka");
const poduszkaSprite = document.getElementById("poduszka");
const interaction = document.querySelector(".dialogue-hitbox-detector");


const SPAWN_X = 470;
const SPAWN_Y = 330;
const SPAWN_SPRITE =
  "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_back.png";

let x = SPAWN_X;
let y = SPAWN_Y;
const speed = 4.5;

const minX = -10;
const maxX = 650;
const minY = 70;
const maxY = 318;


const keys = {
  up: false,
  down: false,
  left: false,
  right: false
};


function isOverlapping(a, b) {
  if (!a || !b) return false;

  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

//Allows Poduszka to spawn with back turned to the user and at the set spaw spot!!
function spawnPlayer(){
  poduszkaSprite.src = SPAWN_SPRITE;

  poduszka.style.position = "absolute";
    poduszka.style.left = SPAWN_X + "px";
  poduszka.style.top = SPAWN_Y + "px";
}
spawnPlayer();




document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") keys.up = true;
  if (e.key === "ArrowDown") keys.down = true;
  if (e.key === "ArrowLeft") keys.left = true;
  if (e.key === "ArrowRight") keys.right = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") keys.up = false;
  if (e.key === "ArrowDown") keys.down = false;
  if (e.key === "ArrowLeft") keys.left = false;
  if (e.key === "ArrowRight") keys.right = false;
});

// Update dialogue hitbox depending on sprite direction
function updateInteraction(direction) {
  interaction.style.transform = "translate(-50%, -50%)";

  if (direction === "up") {
    interaction.style.left = "50%";
    interaction.style.top = "60%";
  } else if (direction === "down") {
    interaction.style.left = "50%";
    interaction.style.top = "100%";
  } else if (direction === "left") {
    interaction.style.left = "10%";
    interaction.style.top = "80%";
  } else if (direction === "right") {
    interaction.style.left = "50%";
    interaction.style.top = "50%";
  }
}

// Main game loop
function gameLoop() {
  let nextX = x;
  let nextY = y;

  if (keys.up) {
    nextY -= speed;
    poduszkaSprite.src = "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_back.png";
    updateInteraction("up");
  }
  if (keys.down) {
    nextY += speed;
    poduszkaSprite.src = proxitiniEncounter
      ? "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_front_withproxitini.png"
      : "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_front.png";
    updateInteraction("down");
  }
  if (keys.left) {
    nextX -= speed;
    poduszkaSprite.src = proxitiniEncounter
      ? "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_left_withproxitini.png"
      : "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_left.png";
    updateInteraction("left");
  }
  if (keys.right) {
    nextX += speed;
    poduszkaSprite.src = proxitiniEncounter
      ? "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_right_withproxitini.png"
      : "../../resources/timeline_contents/knot42/poduszka_sprites/poduszka_right.png";
    updateInteraction("right");
  }

  // Clamp position
  nextX = Math.max(minX, Math.min(maxX, nextX));
  nextY = Math.max(minY, Math.min(maxY, nextY));

  if (canMoveTo(nextX, nextY)) {
    x = nextX;
    y = nextY;
    poduszka.style.left = x + "px";
    poduszka.style.top = y + "px";
  }


  requestAnimationFrame(gameLoop);
}


poduszka.style.position = "absolute";
poduszka.style.left = x + "px";
poduszka.style.top = y + "px";

interaction.style.position = "absolute";
interaction.style.left = "50%";
interaction.style.top = "50%";
interaction.style.transform = "translate(-50%, -50%)";







//FOR DIALOGUE HITBOX TRIGGER OVERLAP

let pendingAction = null;

const interactibleHiboxes = Object.keys(HITBOX_DIALOGUES).map(id => ({

  element : document.getElementById(id),
  dialogues: HITBOX_DIALOGUES[id]

}));





function getActiveHitbox(){
  if (proxitiniHitbox && proxitiniHitbox.offsetParent !== null) {
    if (isOverlapping(interaction, proxitiniHitbox)) {
      return { element: proxitiniHitbox, dialogues: Proxitini, isProxitini: true };
    }
  }

  for (const hitbox of interactibleHiboxes){
    if (hitbox.element && isOverlapping(interaction, hitbox.element)){
    return hitbox;
  }
}
return null;
}



let dialogueSentences = [];
let dialogueIndex = 0;
let charIndex = 0;
let isTyping = false;
let dialogueActive = false;

function splitIntoSentences(text) {
  return text.match(/[^.!?]+[.!?]?/g) || [text];
}

function typeText(sentence) {
  isTyping = true;
  dialogueText.textContent = "";
  charIndex = 0;

  dialogueSFX.currentTime = 0;
  dialogueSFX.play().catch(err => console.warn("Dialogue SFX failed:", err));




  const interval = setInterval(() => {
    dialogueText.textContent += sentence.charAt(charIndex);
    charIndex++;




    if (charIndex >= sentence.length) {
      clearInterval(interval);
      isTyping = false;
    }
  }, 35);
}









function startDialogue(text){
  dialogueSentences = splitIntoSentences(text);
  dialogueIndex = 0;
  
  dialogueActive = true;

   dialogueSFX.currentTime = 0; // reset in case user triggers fast
  dialogueSFX.play().catch(err => console.warn("Dialogue SFX failed:", err));

  dialogueBox.style.display = "block";




  typeText(dialogueSentences[dialogueIndex]);
}
function nextDialogue(){
  if (isTyping) return;

  dialogueIndex++;

   if (dialogueIndex < dialogueSentences.length) {
    typeText(dialogueSentences[dialogueIndex]);
  } else {
    endDialogue();
  }
}

function endDialogue() {
  dialogueBox.style.display = "none";
  dialogueActive = false;

  // 🎨 Run post-dialogue action (gallery)
  if (pendingAction) {
    const action = pendingAction;
    pendingAction = null;
    action();
    return;
  }

  if (proxitiniEncounter) {
    const proxitini = document.getElementById("proxitini");
    if (proxitini) {
      proxitini.style.display = "none";
      proxitiniHitbox.remove();
    }
  }
}


document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  // 🗨️ Dialogue is active → advance text
  if (dialogueActive) {
    nextDialogue();
    return;
  }

  // 🖼️ Gallery open → ignore Enter
  if (viewerActive) return;

  // 🎯 Try to start new interaction
  const hitbox = getActiveHitbox();
  if (!hitbox) return;

  const hitboxId = hitbox.element.id;

  // 🎨 Queue gallery if this hitbox has one
  if (HITBOX_ACTIONS[hitboxId]) {
    pendingAction = HITBOX_ACTIONS[hitboxId];
  } else {
    pendingAction = null;
  }

  const chosenDialogue = getWeightedRandomDialogue(hitbox.dialogues);
  startDialogue(chosenDialogue.text);

  if (hitbox.isProxitini) {
    handleProxitiniEncounter();
  }
});



function getWeightedRandomDialogue(dialogueArray){
  const totalWeight = dialogueArray.reduce((sum, d) => sum + d.weight, 0);

  let random = Math.random() * totalWeight;

  for (const dialogue of dialogueArray){
    random -= dialogue.weight;
    if (random <= 0){
      return dialogue;
    }
  }
  return dialogueArray[0];
}




//BLOCKADES SECTOR
const playerCollider = document.querySelector(".player-collider");
const blockades = Array.from(document.querySelectorAll(".blockade"));

function isColliding(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.right <= r2.left ||
    r1.left >= r2.right ||
    r1.bottom <= r2.top ||
    r1.top >= r2.bottom
  );
}


//The reason movement broke before: THAT FUNCTION IS IMPROTANT BUT MUST BE PERFECT.
function canMoveTo(newX, newY) {
  const prevLeft = poduszka.style.left;
  const prevTop = poduszka.style.top;

  poduszka.style.left = newX + "px";
  poduszka.style.top = newY + "px";

  for (const blockade of blockades) {
    if (isColliding(poduszka, blockade)) {
      poduszka.style.left = prevLeft;
      poduszka.style.top = prevTop;
      return false;
    }
  }

  return true;
}




//MUSIC ZONE
window.addEventListener("load", () => {
  const bgm = document.getElementById("roomBGM");
  if (!bgm) return;

  bgm.volume = 0.05; 
  bgm.play().catch(() => {
    
    const startOnInteraction = () => {
      bgm.play();
      document.removeEventListener("keydown", startOnInteraction);
      document.removeEventListener("click", startOnInteraction);
    };
    document.addEventListener("keydown", startOnInteraction);
    document.addEventListener("click", startOnInteraction);
  });
});







//WHITE SCREEN OVERLAY ON SCREEN RELOAD
window.addEventListener("load", ()=>{
  const fade = document.getElementById("whiteSceneOverlay");

  setTimeout(()=>{
    fade.style.opacity = "0";
     },150);

    setTimeout(() =>{
      fade.remove();
    },1300);
  });







  //🍬 Proxitini appears:
  window.addEventListener("load", () => {
    const proxitini = document.getElementById("proxitini");
    if (!proxitini)
      return;

      const chanceOfProxitiiniToAppear = Math.random();
      if (chanceOfProxitiiniToAppear <= 0.07){
        proxitini.style.display = "block";
        proxitiniHitbox.style.display = "block";
      }
      else
      {
        proxitini.style.display = "none";
        proxitiniHitbox.style.display = "none";
    }
  });


  let proxitiniEncounter = false;

  function handleProxitiniEncounter(){
    const proxitini = document.getElementById("proxitini");
    if (!proxitini) return;


    proxitiniEncounter = true;

    poduszkaSprite.dataset.proxitini = "true";
  }




//GALLERIES AND LIGHTBOXES
const comicImages = [
  "../../resources/timeline_contents/knot42/comics/BeginningOfWorldPeace_Comic01_ForAveoScript.png",
   "../../resources/timeline_contents/knot42/comics/TamingYourCat'iely _01.png",
    "../../resources/timeline_contents/knot42/comics/TamingYourCat'iely _02.png",
];

const sketchImages = [
  "../../resources/timeline_contents/knot42/sketches/AvrielyStatue_ideshissketches.png",
  "../../resources/timeline_contents/knot42/sketches/bordowy_ideshissketches.png",
];

const fullArtsImages = [
  "../../resources/timeline_contents/knot42/fullarts/candyadventure_for_release.png",

];
const imageOverlay = document.getElementById("imageViewerOverlay");
const viewerImage = document.getElementById("viewerImage");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");




let currentImages = [];
let currentIndex = 0;
let viewerActive = false;



imageOverlay.addEventListener("click", () => {
  closeImageViewer();
});

const imageViewer = document.querySelector(".imageViewer");

imageViewer.addEventListener("click", (e) => {
  e.stopPropagation();
});

function openImageViewer(images) {
    currentImages = images;
    currentIndex = 0;
    viewerImage.src = currentImages[currentIndex];
    imageOverlay.style.display = "flex";
    viewerActive = true;
}
function closeImageViewer() {
    imageOverlay.style.display = "none";
    viewerActive = false;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    viewerImage.src = currentImages[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    viewerImage.src = currentImages[currentIndex];
}
prevArrow.addEventListener("click", prevImage);
nextArrow.addEventListener("click", nextImage);

document.addEventListener("keydown", (e) => {
    if (!viewerActive) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeImageViewer();
});




//🚪🚪🚪 EXITING BOX LOGIC 🚪🚪🚪
const exitZone = document.getElementById("exitZone");

function checkExitZone() {
  if (!exitZone) return false;
  return isOverlapping(interaction, exitZone);
}

// Trigger exit when pressing Enter
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  if (checkExitZone()) {
    window.location.href = "../timeline.html"; // <-- set your target URL
  }
});





//🅾️ FOR WORKING SPRITE MOVEMENT 🅾️
requestAnimationFrame(gameLoop);
// Do not delete. Or else:🦫

