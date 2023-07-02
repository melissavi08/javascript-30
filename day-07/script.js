// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];
console.log("people", people);

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
console.log("comments", comments);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const someOlder = people.some(person => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - person.year >= 19;
// });
const someOlder = people.some(
  person => new Date().getFullYear() - person.year >= 19
);
console.log("Exercise 1", { someOlder });

// Array.prototype.every() // is everyone 19 or older?
// const everyOlder = people.every(person => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - person.year >= 19;
// });
const everyOlder = people.every(
  person => new Date().getFullYear() - person.year >= 19
);

console.log("Exercise 2", { everyOlder });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log("Exercise 3", { findComment });

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log("Exercise 4", { commentIndex });

const commentDeleted = [...comments];
commentDeleted.splice(commentIndex, 1);
console.log("Exercise 4", { commentDeleted });
