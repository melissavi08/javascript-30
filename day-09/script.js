const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector(".makeGreen");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// clearing
console.clear();

// Regular
console.log("hello");

// Interpolated
console.log("hello I am a %s string!", "❤");

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background-color: pink"
);

// warning!
console.warn("OH NOO");

// Error :|
console.error("ERROR");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 1, "That is wrong"); // you don't see anything because it's true
console.assert(1 === 2, "That is wrong");

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong");

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table
console.table(dogs);
