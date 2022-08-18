// STEP 1
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

// STEP 2
navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`;
  },
  err => {
    console.error(err);
    alert("HEY! YOU GOTTA ALLOW THAT TO HAPEN!!!!");
  }
);
