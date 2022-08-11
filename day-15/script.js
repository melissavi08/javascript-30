const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

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
  this.reset();
}

// STEP 4
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
      <label for="">${plate.text}</label>
    </li>
    `;
    })
    .join("");
}

//STEP 1
addItems.addEventListener("submit", addItem);
