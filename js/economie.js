// Circular Progress Bar
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 50,    
    speed = 60;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#2f435e ${progressStartValue * 3.6}deg, #ececec 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
