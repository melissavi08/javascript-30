// STEP 1
const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// STEP 2
function handleEnter() {
  // STEP 5
  console.log("ENTER!!!");
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      // STEP 11
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    // {
    //   STEP 10 if line
    //   if (this.classList.contains("trigger-enter")) {
    //     this.classList.add("trigger-enter-active");
    //   }
    // },
    150
  );
  // STEP 7
  background.classList.add("open");
  // STEP 9
  const dropdown = this.querySelector(".dropdown");
  console.log(dropdown);
  const dropdownCoords = dropdown.getBoundingClientRect();
  console.log(dropdownCoords);
  const navCoords = nav.getBoundingClientRect();
  console.log(navCoords);
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };
  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

// STEP 3
function handleLeave() {
  // STEP 6
  console.log("LEAVE!!!");
  this.classList.remove("trigger-enter", "trigger-enter-active");
  // STEP 8
  background.classList.remove("open");
}

// STEP 4
triggers.forEach(trigger =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleLeave)
);
