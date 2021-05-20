var content = document.getElementById("content");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector(".css");
function backgroundColor() {
  content.style.background =
    " linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = content.style.background + ";";
}

color1.addEventListener("input", backgroundColor);

color2.addEventListener("input", backgroundColor);
