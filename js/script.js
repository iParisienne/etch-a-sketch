const main = document.querySelector('.main'); 
const wrapper = document.createElement('div');
const grid = document.createElement('div'); 
const stylebar = document.querySelector('.stylebar');
const gridsizeInput = document.querySelector('#gridsize-input');
const resetGridBtn = document.querySelector('.resetGrid-btn');
const colorpickerInput = document.querySelector('#colorpicker-input');
const randomColorBtn = document.querySelector('.randomCol-btn');
const fadeBlackBtn = document.querySelector('.fadeBlack-btn')
let amountOfDivsX = 16; //define how many divs should be created on x-axis
let amountOfDivsY = 16; //y-axis
let gridCreatedBool = false;
let fixedColorBool = true;
let blackFadeBool = false;
let randomColorBool = false;
let A = 0.1;

wrapper.classList.add('wrapper');
main.appendChild(wrapper);
grid.classList.add('grid'); 
wrapper.appendChild(grid); 

function defaultValuesGrid(){
    gridsizeInput.value = 16;
    amountOfDivsX = 16;
    amountOfDivsY = 16;
}

function defaultOperationGrid(){
    if(gridCreatedBool)
        resetGrid();
    createGrid(amountOfDivsX, amountOfDivsY);
    setColor();
}

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
    gridCreatedBool = true;
}

function resetGrid(){ 
    grid.innerHTML = '';
}

function resetGridBtnFunc(){ 
    defaultValuesGrid();
    defaultOperationGrid();
}

function randomColors(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function fadeIntoBlack(){
    /* Random generated hue and saturation
    let H = Math.floor(Math.random()*360).toString();
    let S = Math.floor(Math.random()*100).toString();
    */
    A += 0.1;
    if(A > 1)
        A = 0.1;
    let fadeBlackColor = `hsla(0,0%,0%,${A})`;
    console.log(A);
    return fadeBlackColor;
}

function activateRandomColors(){
    if(fixedColorBool || blackFadeBool){
        fixedColorBool = false;
        blackFadeBool = false;
        randomColorBool = true;
    }
}

function activateFadeIntoBlack(){
    if(fixedColorBool || randomColorBool){
        fixedColorBool = false;
        randomColorBool = false;
        blackFadeBool = true;
    }
}

function mouseOverPaint(e){ 
    if(e.buttons == 1){
        if(fixedColorBool)
            this.style.background = colorpickerInput.value;
        else if(randomColorBool)
            this.style.background = randomColors();
        else if(blackFadeBool)
            this.style.background = fadeIntoBlack();
    }
}

function mouseClickPaint(){
    if(fixedColorBool)
        this.style.background = colorpickerInput.value;
    else if(randomColorBool)
        this.style.background = randomColors();
    else if(blackFadeBool)
        this.style.background = fadeIntoBlack();
}

function mouseOverOpacity(){
    this.style.opacity = '1';
}

function mouseOutOpacity(){
    this.style.opacity = '0.5';
}

function setColor(){
    const divs = Array.from(document.querySelectorAll('.square'));
    divs.forEach(
        div => {
            div.addEventListener('mouseover', mouseOverPaint);
            div.addEventListener('click', mouseClickPaint);
        }
    )
}

function onGridSizeInputChange(){
    if(gridsizeInput.value < 2 || gridsizeInput.value > 100){
        defaultValuesGrid();
    }else{
        amountOfDivsX = gridsizeInput.value;
        amountOfDivsY = gridsizeInput.value;
    }
    defaultOperationGrid();
}

defaultValuesGrid();
defaultOperationGrid();

stylebar.addEventListener('mouseover', mouseOverOpacity);
stylebar.addEventListener('mouseout', mouseOutOpacity);
gridsizeInput.addEventListener('change', onGridSizeInputChange);
resetGridBtn.addEventListener('click', resetGridBtnFunc);
randomColorBtn.addEventListener('click', activateRandomColors);
fadeBlackBtn.addEventListener('click', activateFadeIntoBlack);
colorpickerInput.addEventListener('input', function() {  
    fixedColorBool = true;
});
