const opencase_study_btn = document.querySelectorAll(".buttons a");
let btnIndex = 0;

console.log(opencase_study_btn);

document.addEventListener("DOMContentLoaded", initializebtn);

function initializebtn(){
    if(opencase_study_btn.length > 0){
        opencase_study_btn[btnIndex].classList.add("display_btn");
        // intervalId = setInterval(nextSlide, 75000);
    }
}

function showbtn(index){
    if(index >= opencase_study_btn.length){
        btnIndex = 0;
    }
    else if(index < 0){
        btnIndex = opencase_study_btn.length - 1;
    }

    opencase_study_btn.forEach(btn => {
        btn.classList.remove("display_btn");
    });
    opencase_study_btn[btnIndex].classList.add("display_btn");
}

    function prev_study_case_btn(){
        // clearInterval(intervalId);
        btnIndex--;
        showbtn(btnIndex);
    }
    
    function next_study_case_btn(){
        btnIndex++;
        showbtn(btnIndex);
    }
    
