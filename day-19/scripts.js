const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// STEP 1
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(localMediaStream => {
      console.log(localMediaStream);
      // STEP 3
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH No!!!`, err);
    });
}

// STEP 4
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // STEP 8 take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // console.log(pixels);
    // mess with them
    // pixels = redEffect(pixels);
    // STEP 12
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;
    // STEP 14
    pixels = greenScreen(pixels);
    // STEP 10 put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

// STEP 5
function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  //STEP 7 take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  // console.log(data);
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome"/>`;
  strip.insertBefore(link, strip.firstChild);
}

// STEP 9
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

// STEP 11
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

// STEP 13
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  console.log(levels);

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// STEP 2
getVideo();

// STEP 6
video.addEventListener("canplay", paintToCanvas);
