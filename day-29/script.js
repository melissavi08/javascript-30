// STEP 2
let countdown;
// STEP 8
const timerDisplay = document.querySelector(".display__time-left");
// STEP 11
const endTime = document.querySelector(".display__end-time");
// STEP 14
const buttons = document.querySelectorAll("[data-time]");

// STEP 1
function timer(seconds) {
  // STEP 17
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  // console.log(now, then);

  // STEP 6
  displayTimeLeft(seconds);
  // STEP 13
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      // STEP 3
      clearInterval(countdown);
      return;
    }
    // console.log(secondsLeft);
    // STEP 5
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// STEP 4
function displayTimeLeft(seconds) {
  // STEP 7
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  // STEP 9
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  // console.log({ minutes, remainderSeconds });
  // console.log(seconds);
}

// STEP 10
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  // STEP 12
  endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

// STEP 16
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
  console.log(seconds);
  // console.log(this.dateset.time);
}
// STEP 15
buttons.forEach(button => button.addEventListener("click", startTimer));

// STEP 18
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
