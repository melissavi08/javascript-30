// STEP 1
const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

// STEP 2
function highlightLink() {
  // console.log(this);
  // STEP 4
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  // highlight.style.width = `${linkCoords.width}px`;
  // highlight.style.height = `${linkCoords.height}px`;
  // highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
  // STEP 5
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  // STEP 6
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// STEP 3
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
