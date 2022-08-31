const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
// STEP 3
let lastHole;
// STEP 8
let timeUp = false;
// STEP 14
let score = 0;

// STEP 1
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// STEP 2
function randomHole(holes) {
  // console.log(holes.length);
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  // STEP 5
  if (hole === lastHole) {
    console.log("Ah nah thats the same one bud");
    return randomHole(holes);
  }
  // console.log(hole);
  // STEP 4
  lastHole = hole;
  // STEP 6
  return hole;
}

// STEP 7
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  // console.log(time, hole);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    // STEP 9
    if (!timeUp) peep();
  }, time);
}

// STEP 10
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  // STEP 15
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

// STEP 11
function bonk(e) {
  // console.log(e);
  // STEP 13
  if (!e.isTrusted) return;
  // STEP 16
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

// STEP 12
moles.forEach(mole => mole.addEventListener("click", bonk));
