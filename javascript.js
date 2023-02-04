const container = document.querySelector(".grid-container");
document.querySelector("#reset").addEventListener("click",gridReset);
let currentHover = document.querySelector(".pixel");
let containerWidth = container.clientWidth;
console.log(containerWidth);
let pixelArr = [];
let pixelGridRoot = 20;
console.log("jdkfsf");
let pixelSize = `${(containerWidth-pixelGridRoot)/(pixelGridRoot)-1}px`;
let penStrength = 0.1;
console.log(containerWidth);
console.log(pixelSize);
buildGrid();

document.addEventListener('mouseover', draw); 
    
document.getElementById('pixel-select').onclick = () => {
    result = prompt("enter grid width in pixels")
    if ((Number.isInteger((result/1)) && result <= 100) && result > 0){
    pixelGridRoot = result;
    gridReset();
    } else {
        alert("error: pick a whole number between 1 and 100")
    }
}

document.getElementById('pen-select').onclick = () => {
    result = prompt("enter pen strength from 1 to 100")
    if ((Number.isInteger((result/1)) && result <= 100) && result > 0){
    penStrength = result/100;
    // if (penStrength !== 1){
    //     penStrength = penStrength/(2+penStrength)+(1);
    //     console.log(penStrength);
    // }
    } else {
        alert("error: pick a whole number between 1 and 100")
    }
}

let mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
  if (currentHover.matches(':hover')){
    currentHover.classList.add("pixel-shaded");
    chooseColor(currentHover);
  }
  
}
document.body.onmouseup = function() {
  mouseDown = false;
}





function draw(event){
    if(event.target.matches(".pixel")|| event.target.matches(".pixel-shaded")) {
        
        currentHover = event.target;
        if (mouseDown){
        chooseColor(event.target);
    }
    }
}
function chooseColor(target){
    let opacity = +target.style.opacity
    if (!target.matches(".pixel-shaded")){
        target.classList.add("pixel-shaded");
        target.style.opacity = penStrength;
        console.log("clicked unshaded");
    } else if (opacity < penStrength){
    target.style.opacity = penStrength+0.1;
    } else {
        target.style.opacity = opacity+0.1;
    }
}


function gridReset(){
    eraseGrid();
    buildGrid();
}

function eraseGrid(){
    document.querySelectorAll(".pixel").forEach(element => {
        element.remove();
    });
}


function buildGrid() {
    if (document.querySelectorAll(".pixel").length !== 0) return;
    pixelSize = `${(containerWidth-pixelGridRoot)/(pixelGridRoot)-1}px`;
    for (let i = 0; i < pixelGridRoot**2; i++){
        pixelArr[i] = document.createElement("div");
        pixelArr[i].classList.add("pixel");
        container.appendChild(pixelArr[i]);
        pixelArr[i].setAttribute("style",`width:${pixelSize}; height:${pixelSize};`);
    }
}








