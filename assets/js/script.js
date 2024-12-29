//Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener('load',loading);

function loading(){
   
   preloader.classList.add("masked");
}

//Side_menu
const side_menu = document.querySelector('.side_menu') ;
const close_btn = document.querySelectorAll("#close_btn");
close_btn.forEach((btn) => {
    btn.addEventListener('click',() =>{
    side_menu.classList.toggle("active");
});
});
console.log(close_btn)

//IMAGE SLIDE
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let IntervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider)
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("active");
        IntervalId = setInterval(next,8000);
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
//Scroll_bar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    });
}) ;
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));