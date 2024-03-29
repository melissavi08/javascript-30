// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
console.log("inventors", inventors);

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];
console.log("people", people);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const yearFilter = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year <= 1599
);
console.log("Exercise 1", yearFilter);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const completeName = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log("Exercise 2", completeName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const toYoungest = inventors.sort(
  (inventorA, inventorB) => inventorB.year - inventorA.year
);
console.log("Exercise 3", toYoungest);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const together = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
console.log("Exercise 4", together);

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((inventorA, inventorB) => {
  const last = inventorA.passed - inventorA.year;
  const next = inventorB.passed - inventorB.year;
  return last - next;
});
console.log("Exercise 5", yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");

// For links you can choose any of the following variants:
// const links = Array.from(category.querySelectorAll("a"));
// const links = [...category.querySelectorAll("a")];

// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes("de"));
// console.log("Exercise 6", de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const lastname = people.sort((lastOne, nextOne) => {
  //STEP-3
  const [lastA, firstA] = lastOne.split(", ");
  const [lastB, firstB] = nextOne.split(", ");
  return lastA.localeCompare(lastB);
  // console.log(lastA, firstA);
  // STEP - 2
  // const parts = lastOne.split(", ");
  // console.log(parts);
  // STEP - 1
  // console.log(lastOne);
});
console.log("Exercise 7", lastname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
console.log("data", data);

const sum = data.reduce((obj, item) => {
  // console.log(item);
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
  return obj;
}, {});
console.log("Exercise 8", sum);
