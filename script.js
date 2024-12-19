let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", ""); // Remove active class from all dots
    }
    
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    dots[slideIndex - 1].className += " active"; // Add active class to current dot
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n - 1; // Set slide index to the clicked dot
    showSlides(); // Show the corresponding slide
}