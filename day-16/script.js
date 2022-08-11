// STEP 1
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 250; // STEP 5

// STEP 2
function shadow(e) {
  // console.log(e);
  // STEP 4
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  // console.log(x, y);
  // console.log(this, e.target);
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  // console.log(x, y);

  // STEP 6
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;
  // console.log(xWalk, yWalk);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 pink, 
  ${xWalk * -1}px ${yWalk}px 0 lightblue,
  ${yWalk}px ${xWalk * -1}px 0 plum,
  ${yWalk * -1}px ${xWalk}px 0 mediumaquamarine`;
}

// STEP 3
hero.addEventListener("mousemove", shadow);
