let root = document.documentElement;

const grid = document.getElementsByClassName("grid");
const slider = document.getElementById("slider");
const output = document.getElementById("output");

function sliderChange(val) {
  root.style.setProperty("--column-gap", val + "px");
  output.innerHTML = val + "px";
}

slider.value = 0;