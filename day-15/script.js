const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || []; // STEP 9

//STEP 2
function addItem(e) {
  // console.log("Hello");
  // STEP 3
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  // console.log(item);
  items.push(item);
  populateList(items, itemsList); // STEP 5
  localStorage.setItem("items", JSON.stringify(items)); // STEP 7
  this.reset();
}

// STEP 4 and STEP 6
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }/>
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

// STEP 10
function toggleDone(e) {
  // STEP 12
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
  console.log(e.target);
}

// STEP 1
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone); // STEP 11
populateList(items, itemsList); // STEP 8
