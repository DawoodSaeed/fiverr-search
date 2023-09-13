const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener(
    "click",
    function () {
      const dropdownOptions = this.querySelector(".dropdown-options");
      if (dropdownOptions.classList.contains("active")) {
        dropdownOptions.classList.remove("active");
      } else {
        dropdownOptions.classList.add("active");
      }
    },
    false
  );

  // Prevent event propagation for child options
  const dropdownOptions = dropdown.querySelector(".dropdown-options");
  dropdownOptions.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

//  for the range inputs;
window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = 200; // Set the maximum value to 200

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  //   displayValOne.textContent = sliderOne.value;
  fillColor();
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  //   displayValTwo.textContent = sliderTwo.value;
  fillColor();
}

function fillColor() {
  percent1 = ((sliderOne.value - 50) / (sliderMaxValue - 50)) * 100;
  percent2 = ((sliderTwo.value - 50) / (sliderMaxValue - 50)) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #58a09a ${percent1}%, #58a09a ${percent2}%, #dadae5 ${percent2}%)`;
}
