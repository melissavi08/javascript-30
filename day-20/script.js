window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// STEP 1
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

// STEP 2
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

// STEP 3
recognition.addEventListener("result", e => {
  // console.log(e.results);
  // STEP 5
  const transcript = Array.from(e.results)
    .map(result => result[o])
    .map(result => result.transcript)
    .join("");
  // STEP 7
  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  if (transcript.includes("unicorn")) {
    console.log("🦄🦄🦄🦄🦄🦄🦄🦄🦄");
  }
  console.log(transcript);
});

// STEP 6
recognition.addEventListener("end", recognition.start);
// STEP 4
recognition.start();
