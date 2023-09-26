let currentSlideIndex = 0;
const slides = ["sekiro_images/Sekiro1.jpg", "sekiro_images/Sekiro2.jpg", "sekiro_images/Sekiro3.jpg", "sekiro_images/Sekiro4.jpg"]; 

function showSlide(index) {
    const slideImage1 = document.getElementById("slider-image1");
    const slideImage2 = document.getElementById("slider-image2");
    const slideImage3 = document.getElementById("slider-image3");
    const slideImage4 = document.getElementById("slider-image4");
    
    slideImage1.src = slides[index]; 
    slideImage2.src = slides[index]; 
    slideImage3.src = slides[index]; 
    slideImage4.src = slides[index];
    currentSlideIndex = index;
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}


showSlide(currentSlideIndex);