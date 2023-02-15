"use strict";

window.addEventListener("DOMContentLoaded", init);
//init function executes when DOMContentLoaded

function init() {
  document.addEventListener("click", randomBackground);
  // whenever screen is clicked, start randomBackground function
}

function randomBackground() {
  let rgb = randomColor();
  console.log(rgb);
  // value of rgb is return value of randomColor function

  function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // create object has property of r,g,b
    //and each has value of variable r,g,b (random number)
    return { r: r, g: g, b: b };
  }
  function rgbToCSS(rgb) {}
}
