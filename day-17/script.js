const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// STEP 3
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

// STEP 1
// const sortedBands = bands.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// STEP 4
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");

// STEP 2
console.log(sortedBands);
