const container = document.querySelector(".grid-container");

let currentHover = document.querySelector(".pixel");
let containerWidth = container.clientWidth;
let pixelArr = [];
let pixelGridRoot = 20;
let pixelSize = `${(containerWidth-pixelGridRoot)/(pixelGridRoot)-1}px`;
let penStrength = 0.2;
let penColorClass = "pixel-shaded";
let penColorId = "#select-black"
document.querySelector("#select-black").style.border = "1px solid black";
let colorSelectors = document.querySelector(".colors").children;
console.log(colorSelectors);

buildGrid();

document.querySelector("#select-red").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-red";
    penColorClass = "pixel-red";
    document.querySelector("#select-red").style.border = "1px solid black";
}
document.querySelector("#select-magenta").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-magenta";
    penColorClass = "pixel-magenta";
    document.querySelector("#select-magenta").style.border = "1px solid black";
}
document.querySelector("#select-blue").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-blue";
    penColorClass = "pixel-blue";
    document.querySelector("#select-blue").style.border = "1px solid black";
}
document.querySelector("#select-cyan").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-cyan";
    penColorClass = "pixel-cyan";
    document.querySelector("#select-cyan").style.border = "1px solid black";
}
document.querySelector("#select-green").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-green";
    penColorClass = "pixel-green";
    document.querySelector("#select-green").style.border = "1px solid black";
}
document.querySelector("#select-yellow").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-yellow";
    penColorClass = "pixel-yellow";
    document.querySelector("#select-yellow").style.border = "1px solid black";
}
document.querySelector("#select-black").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-black";
    penColorClass = "pixel-shaded";
    document.querySelector("#select-black").style.border = "1px solid black";
}
document.querySelector("#select-white").onclick = () => {
    document.querySelector(penColorId).style.border = "";
    penColorId = "#select-white";
    penColorClass = "pixel-white";
    document.querySelector("#select-white").style.border = "1px solid black";
}





document.querySelector("#reset").addEventListener("click",gridReset);


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
    
    chooseColor(currentHover);
  }
  
}
document.body.onmouseup = function() {
  mouseDown = false;
}





function draw(event){
    if(event.target.matches(".pixel")) {
        
        currentHover = event.target;
        if (mouseDown){
        chooseColor(event.target);
    }
    }
}
function chooseColor(target){
    let opacity = +target.style.opacity;
    console.log(opacity);
    if (opacity === 0 && penColorClass !== "pixel-white"){
        target.classList.add(penColorClass);
        target.style.opacity = penStrength;
    } else if (penColorClass === "pixel-white") {
        if (opacity <= penStrength) {
            target.style.opacity = 0;
        } else {
            target.style.opacity -= penStrength;
        }
        
        } else {
            target.className = "";
            target.classList.add("pixel")
            target.classList.add(penColorClass);
            if (opacity < penStrength){
                target.style.opacity = penStrength+0.1;
            } else {
                target.style.opacity = opacity+0.1;
            }
    }
    opacity = +target.style.opacity;
    if (opacity > 1){
        target.style.opacity = 1
    }

    //  if (!target.matches(".pixel-shaded")){
    //     target.classList.add("pixel-shaded");
    //     target.style.opacity = penStrength;
    //     console.log("clicked unshaded");
    // } else if (opacity < penStrength){
    // target.style.opacity = penStrength+0.1;
    // } else {
    //     target.style.opacity = opacity+0.1;
    // }
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
    container.classList.add("temp-transition");
    for (let i = 0; i < pixelGridRoot**2; i++){
        pixelArr[i] = document.createElement("div");
        pixelArr[i].classList.add("pixel");
        container.appendChild(pixelArr[i]);
        pixelArr[i].setAttribute("style",`width:${pixelSize}; height:${pixelSize};`);
    }
    container.classList.add("temp-grid");
    setTimeout(() => {container.classList.remove("temp-grid")}, 250);
    setTimeout(() => {container.classList.remove("temp-transition")}, 255);
}








