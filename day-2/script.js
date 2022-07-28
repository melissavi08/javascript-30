//STEP 4
const secondHand = document.querySelector(".second-hand");
//STEP 6 by myself
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

function setDate() {
  //STEP 1
  // console.log("hi");
  //STEP 2
  const now = new Date();
  const seconds = now.getSeconds();
  console.log("seconds", seconds);
  //STEP 3
  const secondsDegrees = (seconds / 60) * 360 + 90;
  //STEP 5
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //STEP 7 by meself
  const minutes = now.getMinutes();
  console.log("minutes", minutes);
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  console.log("hours", hours);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
