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

var current1 = 0;
slides1 = document.getElementsByClassName("slideimg");

setInterval(function () {
    for (var i = 0; i < slides1.length; i++) {
        slides1[i].style.opacity = 0;
    }
    current1 = (current1 != slides1.length - 1) ? current1 + 1 : 0;
    slides1[current1].style.opacity = 1;
}, 4000);


var current2 = 0;
    slides2 = document.getElementsByClassName("slideimgsponsor");

setInterval(function () {
    for (var i = 0; i < slides2.length; i++) {
        slides2[i].style.opacity = 0;
    }
    current2 = (current2 != slides2.length - 1) ? current2 + 1 : 0;
    slides2[current2].style.opacity = 1;
}, 4000);






var searchbutton = document.querySelector(".searchbutton");
var searchmenu = document.querySelector("#searchmenu");
var body = document.querySelector("main");


searchbutton.addEventListener("click", function() {
    searchmenu.classList.toggle("visible")
    header.classList.toggle("stickyheadersearch")
    searchbutton.classList.toggle("underline")
});