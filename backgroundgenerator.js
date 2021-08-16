var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var r = Math.round(getRandomArbitrary(0,255));
var g = Math.round(getRandomArbitrary(0,255));
var b = Math.round(getRandomArbitrary(0,255));

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var randomColor = rgbToHex(r, g, b);
var randomColor2 = rgbToHex(r, g, b);

function randomBackground() {
    body.style.background = 
    "linear-gradient(to right, "
    + randomColor
    + ", "
    + randomColor2
    + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button1.addEventListener("click", randomBackground);
button2.addEventListener("click", randomBackground);