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



          jQuery(function(){
              $(function () {
                  $(window).scroll(function () {
                      if ($(this).scrollTop() > 200 ) { 
                          $('#scrollUp').css('right','10px');
                      } else { 
                          $('#scrollUp').removeAttr( 'style' );
                      }

                  });
              });
          });
