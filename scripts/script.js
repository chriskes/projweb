// JavaScript Document

//BRONNEN: 
// https://www.w3schools.com/howto/howto_js_sticky_header.asp
// https://stackoverflow.com/questions/31223341/detecting-scroll-direction

// Get the header
var header = document.querySelector("#stickyheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;


// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
    
    if ((document.body.getBoundingClientRect()).top > scrollPos)
		 header.classList.remove("stickyheader");
	
      else if (window.pageYOffset > sticky) {
        header.classList.add("stickyheader");
   } 
    
    else {
        header.classList.remove("stickyheader");
    }
		
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});



// BRON: https://codepen.io/leotran/pen/XdjMzj

var current = 0,
    slides = document.getElementsByClassName("slideimg");

setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
}, 4000);
