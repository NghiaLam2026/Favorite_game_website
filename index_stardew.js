let currentSlideIndexStardew = 0;
const stardewSlides = ["stardew_images/Stardew1.jpg", "stardew_images/Stardew2.jpg", "stardew_images/Stardew3.jpg", "stardew_images/Stardew4.jpg"];

function show_Slide_Stardew(index) {
    const slideImage5 = document.getElementById("slider-image5");
    const slideImage6 = document.getElementById("slider-image6");
    const slideImage7 = document.getElementById("slider-image7");
    const slideImage8 = document.getElementById("slider-image8");

    slideImage5.src = stardewSlides[index];
    slideImage6.src = stardewSlides[index];
    slideImage7.src = stardewSlides[index];
    slideImage8.src = stardewSlides[index];
    currentSlideIndexStardew = index;
}

function prev_Slide_Stardew() {
    currentSlideIndexStardew = (currentSlideIndexStardew - 1 + stardewSlides.length) % stardewSlides.length;
    show_Slide_Stardew(currentSlideIndexStardew);
}

function next_Slide_Stardew() {
    currentSlideIndexStardew = (currentSlideIndexStardew + 1) % stardewSlides.length;
    show_Slide_Stardew(currentSlideIndexStardew);
}

show_Slide_Stardew(currentSlideIndexStardew);