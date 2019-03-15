// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) { myIndex = 1 }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000);
// }
let title = 'title';
const myPageButton = document.querySelector('.hide-mypage')

myPageButton.addEventListener('click', () => {
  toggleHide(document.querySelector('.mypage-container'))
});

function toggleHide(element) {
  element.classList.toggle('hide')
}


const myHomeButton = document.querySelector('.hide-navicon-button')

myHomeButton.addEventListener('click',() => {
  toggleHide(document.querySelector('.mynavicon'))
});

function toggleHide(element){
  element.classList.toggle('hide');
}
function hideIcons(){
hideIconButtons.forEach(function foo(button){
  button.addEventListener('click', function onButtonClick(){
    const myIconButtonsToHide = this.parentElement.parentElement
    console.log(myIconButtonsToHide)
    console.log(myIconButtonsToHide.remove())
  })
})
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




