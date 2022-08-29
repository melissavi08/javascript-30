// STEP 1
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// STEP 2
speed.addEventListener("mousemove", function (e) {
  console.log(e);
  const y = e.pageY - this.offsetTop;
  // console.log(y);
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  // console.log(height);
  // STEP 4
  const playbackRate = percent * (max - min) + min;
  // STEP 3
  bar.style.height = height;
  // STEP 5
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;

  console.log(percent);
});
