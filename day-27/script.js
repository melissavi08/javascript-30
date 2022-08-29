// STEP 1
const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

// STEP 2
slider.addEventListener("mousedown", e => {
  isDown = true;
  // STEP 4
  slider.classList.add("active");
  // STEP 7
  // console.log(e.pageX);
  startX = e.pageX - slider.offsetLeft;
  // STEP 9
  scrollLeft = slider.scrollLeft;
  console.log(startX);
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  // STEP 5
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  // STEP 6
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  // STEP 3
  if (!isDown) return;
  // console.log(isDown);
  // console.count(isDown);
  // console.log("Do Work!");
  // STEP 8
  // console.log(startX);
  // STEP 10
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({ x, startX });
  const walk = (x - startX) * 3;
  // console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
});
