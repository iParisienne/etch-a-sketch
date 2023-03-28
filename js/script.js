const main = document.querySelector('.main'); 
const wrapper = document.createElement('div');
const grid = document.createElement('div'); 
const stylebar = document.querySelector('.stylebar');
let amountOfDivsX = 32; //define how many divs should be created on x-axis
let amountOfDivsY = 32; //y-axis

wrapper.classList.add('wrapper');
main.appendChild(wrapper);
grid.classList.add('grid'); 
wrapper.appendChild(grid); //put grid inside of wrapper so that it's own element for the border property

for(let i = 0; i < amountOfDivsX; i++){ // append ${amountOfDivsX} to grid div
    const divX = document.createElement('div'); 
    divX.classList.add('parentSquare');
    for(let j = 0; j < amountOfDivsY; j++){ // append ${amountOfDivsY} to each divX div
        const divY = document.createElement('div');
        divY.classList.add('square');
        divX.appendChild(divY);
    }
    grid.appendChild(divX); 
}

function mouseOverBlack(e){
    if(e.buttons == 1){
        this.style.background = 'black';
    }
}

function mouseOverOpacity(){
    this.style.opacity = '1';
}

function mouseOutOpacity(){
    this.style.opacity = '0.5';
}

const divs = Array.from(document.querySelectorAll('.square'));
divs.forEach(
    div => {
        div.addEventListener('mouseover', mouseOverBlack);
    }
);

stylebar.addEventListener('mouseover', mouseOverOpacity);
stylebar.addEventListener('mouseout', mouseOutOpacity);

