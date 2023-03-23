const body = document.body; 
const grid = document.createElement('div'); 
const amountOfDivsX = 16; //define how many divs should be created on x-axis
const amountOfDivsY = 16; //y-axis

grid.classList.add('grid'); 
body.appendChild(grid); 

for(let i = 0; i < amountOfDivsX; i++){ // append ${amountOfDivsX} to grid div
    const divX = document.createElement('div'); 
    for(let j = 0; j < amountOfDivsY; j++){ // append ${amountOfDivsY} to each divX div
        const divY = document.createElement('div');
        divY.classList.add('square');
        divX.appendChild(divY);
    }
    grid.appendChild(divX); 
}

