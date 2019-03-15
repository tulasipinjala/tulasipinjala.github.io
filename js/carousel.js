// carousel = (function(){
    
//     var box = document.querySelector('.carouselbox');
//     var next = box.querySelector('.next');
//     var prev = box.querySelector('.prev');
    
//     var counter = 0;
//     var items = box.querySelectorAll('.content li');
//     var amount = items.length;
//     var current = items[0];
//     box.classList.add('active');
    
//     function navigate(direction) {
     
//       current.classList.remove('current');
      
      
//       counter = (counter + direction) % amount;
//       counter = counter < 0 ? amount - 1 : counter;
      
//       current = items[counter];
//       current.classList.add('current');
//     }
    
//     next.addEventListener('click', function(ev) {
//       navigate(1);
//     });
//     prev.addEventListener('click', function(ev) {
//       navigate(-1);
//     });
    
//     navigate(0);
//   })();
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
