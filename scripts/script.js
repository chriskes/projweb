// JavaScript Document
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector("#stickyheader");
var newssection =  document.querySelector("#newssection");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    newssection.classList.add("stickynewssection");
      console.log("Scroll!")
    
  } else {
    header.classList.remove("sticky");
    newssection.classList.remove("stickynewssection");
  }
}