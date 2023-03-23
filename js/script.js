const body = document.body; //save body in variable
const wrapper = document.createElement('div'); //create wrapper div
const amountOfDivs = 16; //define how many divs should be created

wrapper.classList.add('wrapper'); //add class wrapper to wrapper
body.appendChild(wrapper); //append wrapper div to body element

for(let i = 0; i < amountOfDivs; i++){
    const div = document.createElement('div'); //create div
    div.classList.add('square'); //add class square to div
    wrapper.appendChild(div);  //append div to wrapper
}

