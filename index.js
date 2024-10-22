const bodyEl = document.querySelector
("body")

bodyEl.addEventListener("mousemove",(event) => {
const xPos = event.offsetX;
const yPos = event.offsetY;
const spanEl = document.createElement("span");
spanEl.style.left = xPos + "px"
spanEl.style.top = yPos + "px"
const size = Math.random()*100;
spanEl.style.width = size + "px"
spanEl.style.height = size + "px"
bodyEl.appendChild(spanEl);


setTimeout(() =>{
spanEl.remove();
}, 6000)
});

let root = document.documentElement;

const grid = document.getElementsByClassName("grid");
const slider = document.getElementById("slider");
const output = document.getElementById("output");

function sliderChange(val) {
  root.style.setProperty("--column-gap", val + "px");
  output.innerHTML = val + "px";
}

slider.value = 0;