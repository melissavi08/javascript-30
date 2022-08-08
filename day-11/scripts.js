/* Get Our Elements */
// STEP 1
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
// STEP 2
function togglePlay() {
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
  // STEP 3
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// STEP 5
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
  // console.log("Update the button");
}

// STEP 6
function skip() {
  // console.log("skipping");
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

// STEP 8
function handleRangeUpdate() {
  video[this.name] = this.value; // STEP 11
  // console.log(this.name); // STEP 10
  // console.log(this.value);
}

// STEP 12
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// STEP 14
function scrub(e) {
  // console.log(e);
  // STEP 16
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
// STEP 4
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress); // STEP 13

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip)); // STEP 7
// STEP 9
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false; // STEP 18
progress.addEventListener("click", scrub); // STEP 15
// progress.addEventListener("mousemove", scrub);// STEP 17
// STEP 19
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", e => mousedown && scrub(e));
