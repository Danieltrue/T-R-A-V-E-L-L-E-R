"use strict";

function animateHeader() {
  //animte teh head text
  var ease = "easeInOutExpo";
  anime({
    targets: ".head-text h1 ul li",
    translateY: [-60, 0],
    opacity: [0, 1],
    delay: anime.stagger(2),
    easing: "easeInOutExpo"
  });
}

window.addEventListener("load", animateHeader);