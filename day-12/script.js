// STEP 2
const pressed = [];
const secretCode = "melissa";

// STEP 1
window.addEventListener("keyup", e => {
  console.log(e.key);
  // STEP 3
  pressed.push(e.key);
  // STEP 4
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING!");
    cornify_add();
  }
  console.log(pressed); // STEP 3
});
