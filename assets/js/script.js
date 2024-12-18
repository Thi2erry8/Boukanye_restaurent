

//IMAGE SLIDER
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let IntervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider)
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("active");
        IntervalId = setInterval(next,5000);
    } 
}
function showSlide(index){
    if(index >= slides.length){
       slideIndex = 0
    }
    else if(index < 0){
       slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[slideIndex].classList.add("active");
}
function prev(){
    slideIndex--;
    showSlide(slideIndex);
}
function next(){
    slideIndex++;
    showSlide(slideIndex);
}