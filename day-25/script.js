// STEP 1
const divs = document.querySelectorAll("div");
// STEP 7
const button = document.querySelector("button");

// STEP 2
function logText(e) {
  console.log(this.classList.value);
  // STEP 5 stop bubbling!!!
  // e.stopPropagation();
}

// STEP 3
// divs.forEach(div => div.addEventListener("click", logText));

// STEP 4
divs.forEach(div =>
  div.addEventListener("click", logText, {
    // capture: true,
    capture: false,
    // STEP 6
    once: true,
  })
);

// STEP 8
button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true,
  }
);
