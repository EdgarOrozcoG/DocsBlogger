let currentIndex = 0;

function showSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slider-image').length;
    const sliderWidth = document.querySelector('.slider').clientWidth;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * sliderWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the slider
showSlide(currentIndex);

// Update the slider on window resize
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});