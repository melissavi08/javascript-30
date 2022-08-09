function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// STEP 1
const sliderImages = document.querySelectorAll(".slide-in");

// STEP 2
function checkSlide(e) {
  // console.count(e);
  // STEP 5
  // console.log(window.scrollY);
  sliderImages.forEach(sliderImage => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    // console.log(slideInAt);
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShow = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.screenY < imageBottom;
    if (isHalfShow && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

// window.addEventListener("scroll", checkSlide); // STEP 3
window.addEventListener("scroll", debounce(checkSlide)); // STEP 4
