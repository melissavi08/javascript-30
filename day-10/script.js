//STEP 1
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;

//STEP 3
function handleCheck(e) {
  // console.log(e);
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log("starting to check them inBetween");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

//STEP 2
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
