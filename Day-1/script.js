//STEP-1
// window.addEventListener("keydown", function (e) {
//   console.log(e.keyCode);
// });

//STEP-2
// window.addEventListener("keydown", function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   console.log(audio);
// });

//STEP-3
// window.addEventListener("keydown", function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if (!audio) return; //stop the function from running all togheter
//   audio.currentTime = 0; // rewind to the start
//   audio.play();
// });

//STEP-4
// window.addEventListener("keydown", function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return; //stop the function from running all togheter
//   audio.currentTime = 0; // rewind to the start
//   audio.play();
//   console.log(key);
// });

//STEP-5
// window.addEventListener("keydown", function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return; //stop the function from running all togheter
//   audio.currentTime = 0; // rewind to the start
//   audio.play();
//   key.classList.add("playing");
// });

//STEP-8
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running all togheter
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

//STEP-7
function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove("playing");
}

//STEP-6
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
//STEP-8
window.addEventListener("keydown", playSound);
