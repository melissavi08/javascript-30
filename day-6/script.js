const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

//STEP-1
// const prom = fetch(endpoint);
// console.log(prom);

// STEP-2
fetch(endpoint)
  // .then(blob => console.log(blob));
  // STEP-3
  .then(blob => blob.json())
  // .then(data => console.log(data));
  // STEP-4
  .then(data => cities.push(...data)); // or we can change const for let in cities

// STEP-5
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

//STEP-13
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// STEP-6
function displayMatches() {
  // console.log(this.value);
  // STEP-8
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  // STEP-9
  const html = matchArray
    .map(place => {
      //   return `
      // <li>
      //   <span class="name">${place.city}, ${place.state}</span>
      //   <span class="population">${place.population}</span>
      // </li>`;
      // })
      //STEP-11
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      //STEP-12 (name) and STEP-14 (population)
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>`;
    })
    // STEP-10
    .join("");
  suggestions.innerHTML = html;
}

// STEP-7
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
