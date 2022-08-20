// STEP 1
const nav = document.querySelector("#main");
// STEP 4
const topOfNav = nav.offsetTop;

// STEP 2
function fixNav() {
  // STEP 5
  // console.log(topOfNav);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px"; // STEP 7
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0; // STEP 8
    document.body.classList.remove("fixed-nav");
  }
}

// STEP 3
window.addEventListener("scroll", fixNav);

// STEPS 6, 9 & 10 are in style.css
