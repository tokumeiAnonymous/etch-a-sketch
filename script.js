//set default values
const canvas = document.querySelector('.canvas');
createCell(16);

let cell = document.querySelectorAll('.pixel');

for (let i = 0; i < cell.length; i++){
    cell[i].addEventListener('click', draw);
}

function createCell(rangeVal){

    replaceCanvas();

    let pixelWidth = (400 / rangeVal);

    for (let i = 0; i < rangeVal * rangeVal; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');

        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelWidth}px`;
        pixel.addEventListener("click", draw);
        pixel.style["background-color"] = `${document.getElementById("background").value}`;
        canvas.appendChild(pixel);
    }
}

function replaceCanvas() {
    let child = canvas.firstElementChild;

    while (child){
        canvas.removeChild(child);
        child = canvas.firstElementChild;
    }
}

function clearCanvas() {
    createCell(`${document.getElementById("size").value}`);
}

/*function changePenColor(color) {
    
}*/

function changeBgColor(){
    clearCanvas();
}

function draw(){
    this.style["background-color"] = `${document.getElementById("pen").value}`;
}





