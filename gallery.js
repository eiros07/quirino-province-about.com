const sliderWrapper = document.querySelector(".slider-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imgWidth = document.querySelector(".slider-wrapper img").clientWidth;

let counter = 0;

// Add click event listener to the previous button
prevBtn.addEventListener("click", () => {
  // Check if the counter is greater than 0 (not the first slide)
  if (counter > 0) {
    // Decrement the counter
    counter--;
    // Update the sliderWrapper's transform property to move to the previous slide
    sliderWrapper.style.transform = `translateX(-${counter * imgWidth}px)`;
  }
});

// Add click event listener to the next button
nextBtn.addEventListener("click", () => {
  // Check if the counter is less than 3 (not the last slide assuming 4 slides)
  if (counter < 3) {
    // Increment the counter
    counter++;
    // Update the sliderWrapper's transform property to move to the next slide
    sliderWrapper.style.transform = `translateX(-${counter * imgWidth}px)`;
  }
});