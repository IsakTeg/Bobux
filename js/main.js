function toggleMenu() {
  let menu = document.getElementById("links");
  if (menu.style.width === "0px") {
    menu.style.width = "7rem"; //Visa meny
  } else {
    menu.style.width = "0px"; //Dölj meny
  }
}

window.onload = function() {
  showSlides(); //Börja slideshow när sidan laddar in
}

document.getElementById("links").style.width = "0px";
var slide_index = 0;
function showSlides() {
  var slides = document.getElementsByClassName("slide"); //Få alla slide element
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //Dölj alla bilder
  }
  slide_index++; //Öka index
  if (slide_index > slides.length) {
    slide_index = 1;
  }
  slides[slide_index - 1].style.display = "flex"; //Visa endast den aktiva bilden
  setTimeout(showSlides, 3000); //Recursive
}
