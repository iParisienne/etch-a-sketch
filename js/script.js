const main = document.querySelector('.main'); 
const wrapper = document.createElement('div');
const grid = document.createElement('div'); 
const stylebar = document.querySelector('.stylebar');
const gridsizeInput = document.querySelector('#gridsize-input');
let amountOfDivsX = 16; //define how many divs should be created on x-axis
let amountOfDivsY = 16; //y-axis

wrapper.classList.add('wrapper');
main.appendChild(wrapper);
grid.classList.add('grid'); 
wrapper.appendChild(grid); //put grid inside of wrapper so that it's own element for the border property

function createGrid(x, y){
    for(let i = 0; i < x; i++){ // append ${amountOfDivsX} to grid div
        const divX = document.createElement('div'); 
        divX.classList.add('parentSquare');
        for(let j = 0; j < y; j++){ // append ${amountOfDivsY} to each divX div
            const divY = document.createElement('div');
            divY.classList.add('square');
            divX.appendChild(divY);
        }
        grid.appendChild(divX); 
    }
}

function resetGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

function mouseOverBlack(e){
    if(e.buttons == 1){
        this.classList.add('setBlack');
    }
}

function mouseOverOpacity(){
    this.style.opacity = '1';
}

function mouseOutOpacity(){
    this.style.opacity = '0.5';
}

function addClassSetBlack(){
    const divs = Array.from(document.querySelectorAll('.square'));
    divs.forEach(
        div => {
            div.addEventListener('mouseover', mouseOverBlack);
        }
    )
}

function onGridSizeInputChange(){
    if(gridsizeInput.value < 2 || gridsizeInput.value > 100){
        gridsizeInput.value = 16;
        amountOfDivsX = 16;
        amountOfDivsY = 16;
    }else{
        amountOfDivsX = gridsizeInput.value;
        amountOfDivsY = gridsizeInput.value;
    }
    resetGrid();
    createGrid(amountOfDivsX, amountOfDivsY);
    addClassSetBlack();
}

if(gridsizeInput.value == ''){
    gridsizeInput.value = amountOfDivsX;
    createGrid(amountOfDivsX, amountOfDivsY);
    addClassSetBlack();
}

stylebar.addEventListener('mouseover', mouseOverOpacity);
stylebar.addEventListener('mouseout', mouseOutOpacity);
gridsizeInput.addEventListener('change', onGridSizeInputChange);

function control(){
    console.log(amountOfDivsX);
    console.log(amountOfDivsY);
}

