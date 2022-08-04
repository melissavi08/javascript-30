//STEP 1
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50; //STEP 10
// ctx.globalCompositeOperation = "multiply"; //STEP 18

//STEP 2
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; //STEP 11
let direction = true; //STEP 15

//STEP 3
function draw(e) {
  if (!isDrawing) return; //STEP 5
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //STEP 12
  // ctx.lineWidth = hue; //STEP 14
  //DRAW STEP 7
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //STEP 8
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  //STEP 13
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  //ctx.lineWidth++; //STEP 16
  //STEP 17
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 10) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

//STEP 9
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

//STEP 4
canvas.addEventListener("mousemove", draw);
//STEP 6
// canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
