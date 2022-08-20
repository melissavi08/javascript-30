const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

// STEP 1
msg.text = document.querySelector('[name="text"]').value;

// STEP 3
function populateVoices() {
  voices = this.getVoices();
  // console.log(voices);
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes("en")) // STEP 13
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`
    )
    .join("");
}

// STEP 4
function setVoice() {
  // console.log("Changing voice");
  // STEP 6
  // console.log(this.value);
  msg.voice = voices.find(voice => voice.name === this.value);
  // STEP 8
  toggle();
}

// STEP 7
// function toggle() {
//   speechSynthesis.cancel();
//   speechSynthesis.speak(msg);
// }

// STEP 9
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// STEP 11
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

// STEP 2
speechSynthesis.addEventListener("voiceschanged", populateVoices);
// STEP 5
voicesDropdown.addEventListener("change", setVoice);

// STEP 10
options.forEach(option => option.addEventListener("change", setOption));

// STEP 12
speakButton.addEventListener("click", toggle);
// stopButton.addEventListener("click", toggle.bind(null, false));
stopButton.addEventListener("click", () => toggle(false));
