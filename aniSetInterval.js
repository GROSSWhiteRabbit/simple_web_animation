'use strict';
(function(){
    const btn = document.querySelector('.btn1'),
    box = document.querySelector('.box');


function myAnimation(elem) {
let pos = 0;

const id = setInterval(frame, 15);
function frame() {
    if (pos == 300) {
        clearInterval(id);
        elem.style.transform = `translate(0px,0px)`;

    } else {
        pos+= 3;
        elem.style.transform = `translate(${pos}px,${pos}px)`;
    }
}
}

btn.addEventListener('click', () => {
    
    box.style.transform = "translate(0px,0px)";

setTimeout(myAnimation, 500, box);
});
})()


