const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
// let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        // intervalId = setInterval(nextSlide, 75000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function changebg(){
    if(slideIndex == 1){
        document.querySelector("body").style.backgroundImage="url(images/today_weather_3.jpg)";
        document.getElementById("heading-text").textContent = "Today Weather App"
        document.getElementById("heading-text").style.fontSize ="3.7rem";
        
    }
    else if(slideIndex == 0){
        document.querySelector("body").style.backgroundImage="url(images/HarmoniBG_2.jpg)";
        document.getElementById("heading-text").textContent = "Harmoni Indah App"
        document.getElementById("heading-text").style.fontSize ="3.7rem";
       
    }

    else{
        document.querySelector("body").style.backgroundImage="url(images/Slime_Jump_2.jpg)";
        document.getElementById("heading-text").textContent = "Slime Jump"
        document.getElementById("heading-text").style.fontSize ="5rem";

    }
   
}

console.log(slides);